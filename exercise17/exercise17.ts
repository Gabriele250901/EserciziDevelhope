import express from "express";
import "express-async-errors";
import morgan from "morgan";
import { Request, Response, NextFunction } from "express";
import pgPromise from "pg-promise";
import Joi from "joi";
import multer from "multer";
import * as dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import passportJWT from "passport-jwt";
import jwt from "jsonwebtoken";
const { SECRET } = process.env;

const app = express();
const port = 3000;
const db = pgPromise()("postgress://postgres:postgres@localhost:5432/Exercise");
app.use(morgan("dev"));
app.use(express.json());
passport.use(
  new passportJWT.Strategy(
    {
      secretOrKey: SECRET,
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload, done) => {
      const user = await db.one(`SELECT * FROM user WHERE id=$1`, payload.id);
      console.log(user);
      try {
        return user ? done(null, user) : done(new Error("User not found."));
      } catch (error) {
        done(error);
      }
    }
  )
);

const setupDb = async () => {
  await db.none(`
      DROP TABLE IF EXIST users;
  
      CREATE TABLE users(
        id SERIAL NOT NULL PRIMARY KEY,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        token TEXT 
      )
    `);

  await db.none(
    `INSERT INTO users (username,password) VALUES ('dummy' , 'dummy')`
  );
};
setupDb();

//SignUp  Route

const signUp = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await db.oneOrNone(
    `SELECT * FROM users WHERE username=$1`,
    username
  );

  if (user) {
    res.status(400).json({ msg: "Username alredy in use." });
  } else {
    const { id } = await db.one(
      `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id`,
      [username, password]
    );
    res
      .status(201)
      .json({ id, msg: "Signup successful. Now you can log in. " });
  }
};

app.post("/api/users/signup", signUp);

//Login Route

const logIn = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await db.one(`SELECT * FROM users WHERE username=$1`, username);
  if (user && user.password === password) {
    const payload = {
      id: user.id,
      username,
    };

    const { SECRET = "" } = process.env;
    const token = jwt.sign(payload, SECRET);
    await db.none(`UPDATE users SET token=$2 id=$1`, [user.id, token]);
    res.status(200).json({ id: user.id, username, token });
  } else {
    res.status(400).json({ msg: "Username or password incorrect." });
  }
};

app.post("/api/users/login", logIn);

//Logout Routes

const authorize = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("jwt", { session: false }, (err: any, user: any) => {
    if (!user || err) {
      res.status(401).json({ msg: "Unathorizedz" });
    } else {
      req.user = user;
      next();
    }
  })(req, res, next);
};

const logOut = async (req: Request, res: Response) => {
  const user: any = req.user;
  await db.none(`UPDATE users SET token=$2 WHERE id=$1`, [user?.id, null]);
  res.status(200).json({ msg: "Logout successfully" });
};
app.get("/api/users/logout", authorize, logOut);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

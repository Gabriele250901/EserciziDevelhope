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


  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
  });
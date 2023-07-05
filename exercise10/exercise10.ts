import express from "express";
import "express-async-errors";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("dev"));

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

app.get("/api/planets/", (req: any, res: any) => {
  res.status(200).json(planets);
});

app.get("/api/planets/:id", (req: any, res: any) => {
  const { id } = req.params;
  const planet = planets.find((planet) => planet.id === Number(id));

  res.status(200).json(planet);
});

app.listen(port, () => {
  console.log(`App listening on port: http://localhost:${port}`);
});

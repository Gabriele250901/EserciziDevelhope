import express from "express";
import "express-async-errors";
import morgan from "morgan";
import {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
} from "./controllers/planets";
const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets = [
  { id: 1, name: "Earth" },
  { id: 2, name: "Mars" },
];

app.get("/api/planets", getAll);
// di solito troveremo un json e non un send

app.get("/api/planets/:id", getOneById);
app.post("/api/planets", create);
app.put("/api/planets/:id", updateById);
app.delete("/api/planets/:id", deleteById);
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

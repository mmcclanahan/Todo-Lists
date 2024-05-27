require("dotenv").config();
import express from "express";
import cors from "cors";
import morgan from "morgan";

import { db } from "./db";
import routes from "./router";

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use(routes);

db();

app.listen(process.env.PORT || 3001, () => {
  console.log("server running on: ", process.env.PORT);
});

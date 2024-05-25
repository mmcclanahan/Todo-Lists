require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const db = require("./db");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use(routes);

db();

app.listen(process.env.PORT || 3001, () => {
  console.log("server running on: ", process.env.PORT);
});

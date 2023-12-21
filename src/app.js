// Dependencies
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");

// Routes
const activitiesRouter = require("./routes/activities-router");
const mealsRouter = require("./routes/meals-router");
const dessertsRouter = require("./routes/desserts-router");
const excludedRouter = require("./routes/excluded-router");

const app = express();

const morganOption = NODE_ENV === "prod" ? "tiny" : "common";

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api", (req, res) => {
  res.send("Hello, Date Ideas!");
});

app.use("/api/activities", activitiesRouter);
app.use("/api/meals", mealsRouter);
app.use("/api/desserts", dessertsRouter);
app.use("/api/excluded", excludedRouter);

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === "prod") {
    response = { error: { message: "server error" } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;

const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
// const bodyParser = require("body-parser");

const apiRouter = require("./routes");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRouter);

app.use(function (_req, res, next) {
  next(createError(404));
  res.sendStatus(404);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
});

module.exports = app;

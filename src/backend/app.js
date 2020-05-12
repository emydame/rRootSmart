<<<<<<< HEAD
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
=======
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
>>>>>>> 550b4a9cdf5880110e445975b11b74b5efba63ac
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

<<<<<<< HEAD
=======
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

>>>>>>> 550b4a9cdf5880110e445975b11b74b5efba63ac
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
<<<<<<< HEAD
=======
  res.render("error");
>>>>>>> 550b4a9cdf5880110e445975b11b74b5efba63ac
});

module.exports = app;

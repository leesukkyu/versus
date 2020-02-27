import express from 'express';
import { databaseConnect } from './db';

var createError = require("http-errors");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var apiRouter = require("./routes/api/api");
const app = express();

// database connect
//databaseConnect();

// cors
const corsOtp = {}
// const corsOtp = {
//   origin: "http://versus.com"
// }
app.use(
  cors(corsOtp)
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'pug');

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cookie
app.use(cookieParser());

// static folder
app.use(express.static(path.join(__dirname, "public")));

// app.use(logger("dev"));

// router
app.use("/", indexRouter);
app.use("/api", apiRouter);

// 404 handler
app.use(function (req, res, next) {
  res.render('404.html')
});

// error handler
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(3000, () => {
  console.log('start 3000');
});

module.exports = app;

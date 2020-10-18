const express = require("express");
const morgan = require("morgan");
const path = require("path");
const pug = require("pug");
const postHandler = require("./middlewares/postHandler");
const reviewHandler = require("./middlewares/reviewHandler");
const authHandler = require("./middlewares/authHandler");

const app = express();

const port = 8080;

// using a json parser
app.use(express.json());

app.use(express.urlencoded());

app.set("view engine", pug);
app.set("views", path.join(__dirname, "views"));

// using morgan in dev mode
app.use(morgan("dev"));

app.get("/", function (req, res, next) {
  res.render("index.pug");
});

// posts and reviews
app.use("/posts", postHandler);
app.use("/reviews", reviewHandler);

// login and signups
app.use("/auth", authHandler);

app.listen(port, function (err) {
  if (!err) {
    console.log("Listenting on port: ", port);
  } else {
    console.log("Failed to listen...");
  }
});

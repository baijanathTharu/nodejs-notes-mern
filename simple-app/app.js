const express = require("express");
const morgan = require("morgan");
const path = require("path");
const pug = require("pug");

const apiRouter = require("./routers/api.router");

const app = express();

const port = 8080;

// using a json parser
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.set("view engine", pug);
app.set("views", path.join(__dirname, "views"));

// using morgan in dev mode
app.use(morgan("dev"));

app.get("/", function (req, res, next) {
  res.render("index.pug");
});

app.use("/api", apiRouter);

app.listen(port, function () {
  console.log("Listenting on port: ", port);
});

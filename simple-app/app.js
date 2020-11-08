const express = require("express");
const morgan = require("morgan");
const path = require("path");
const pug = require("pug");

const appConfig = require("./configs/app.config");
const apiRouter = require("./routers/api.router");

const app = express();

require("./dbConnect");

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.set("view engine", pug);
app.set("views", path.join(__dirname, "views"));

app.use(morgan("dev"));

app.get("/", function (req, res, next) {
  res.render("index.pug");
});

app.use("/api", apiRouter);

app.listen(appConfig.port, function () {
  console.log("Listenting on port: ", appConfig.port);
});

const mongoose = require("mongoose");

const dbConfig = require("./configs/db.config");

mongoose
  .connect(dbConfig.dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(function () {
    console.log("Connected to the db");
  })
  .catch(function (e) {
    console.log("Error: ", e.message);
  });

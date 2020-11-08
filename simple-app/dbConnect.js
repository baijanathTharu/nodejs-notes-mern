const mongoose = require("mongoose");

const { dbUrl, dbName } = require("./configs/db.config");

mongoose
  .connect(dbUrl + dbName, {
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

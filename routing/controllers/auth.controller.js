const express = require("express");

const router = express.Router();

router.get("/profile", function (req, res, next) {
  req.username = "shyam";
  res.json({
    msg: "Hello from profile",
  });
});

module.exports = router;

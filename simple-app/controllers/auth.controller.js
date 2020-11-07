const router = require("express").Router();

router.post("/register", function (req, res, next) {
  res.send("register");
});

router.post("/login", function (req, res, next) {
  res.send("login");
});

module.exports = router;

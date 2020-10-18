const router = require("express").Router();

router
  .route("/login")
  .get(function (req, res, next) {
    res.render("login.pug");
  })
  .post(function (req, res, next) {
    res.json({
      msg: "Form submitted",
      body: req.body,
    });
  });

router
  .route("/signup")
  .get(function (req, res, next) {
    res.render("signup.pug");
  })
  .post(function (req, res, next) {
    res.json({
      msg: "Form submitted",
      body: req.body,
    });
  });

module.exports = router;

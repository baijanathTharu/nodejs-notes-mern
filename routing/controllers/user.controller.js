const router = require("express").Router();

// defining some routes

router
  .route("/")
  .get(function (req, res, nex) {
    res.json({
      msg: "Hello from empty route",
    });
  })
  .post(function (req, res, nex) {})
  .put(function (req, res, nex) {})
  .delete(function (req, res, nex) {});

router
  .route("/search")
  .get(function (req, res, nex) {
    res.json({
      msg: "Hello from search",
    });
  })
  .post(function (req, res, nex) {})
  .put(function (req, res, nex) {})
  .delete(function (req, res, nex) {});

module.exports = router;

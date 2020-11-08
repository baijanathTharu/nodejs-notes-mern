const router = require("express").Router();

const UserModel = require("../models/user.model");
const mapUserDetailsToUserModel = require("../helpers/mapUserDetailsToUserModel");

router.get("/", function (req, res, next) {
  UserModel.find({})
    .limit(2)
    .skip(1)
    .then(function (user) {
      res.json(user);
    })
    .catch(function (e) {
      next({
        message: e.message,
      });
    });
});

router
  .route("/:id")
  .get(function (req, res, next) {
    UserModel.findById(req.params.id)
      .then(function (user) {
        if (!user) return next({ message: "User not available.", status: 404 });
        res.json(user);
      })
      .catch(function (e) {
        next({
          message: e.message,
        });
      });
  })
  .put(function (req, res, next) {
    UserModel.findById(req.params.id)
      .then(function (user) {
        if (!user) return next({ message: "User not available.", status: 404 });
        mapUserDetailsToUserModel(req.body, user);
        user
          .save()
          .then(function (user) {
            res.json(user);
          })
          .catch(function (e) {
            next({
              message: e.message,
            });
          });
      })
      .catch(function (e) {
        next({
          message: e.message,
        });
      });
  })
  .delete(function (req, res, next) {
    UserModel.findById(req.params.id)
      .then(function (user) {
        if (!user) return next({ message: "User not available.", status: 404 });
        user
          .remove()
          .then(function (user) {
            res.json(user);
          })
          .catch(function (e) {
            next({
              message: e.message,
            });
          });
      })
      .catch(function (e) {
        next({
          message: e.message,
        });
      });
  });

module.exports = router;

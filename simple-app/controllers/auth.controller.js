const router = require("express").Router();

const UserModel = require("../models/user.model");
const mapUserDetailsToUserModel = require("../helpers/mapUserDetailsToUserModel");

router.post("/register", function (req, res, next) {
  const newUser = new UserModel({});

  // mutating newUser
  mapUserDetailsToUserModel(req.body, newUser);

  newUser
    .save()
    .then(function (user) {
      res.json(user);
    })
    .catch(function (e) {
      next({
        message: e.message,
        status: 422,
      });
    });
});

router.post("/login", function (req, res, next) {
  const { username, email_address, password } = req.body;

  UserModel.findOne({ username: username })
    .then(function (user) {
      console.log("user: ", user);
      if (!user)
        return next({
          message: "User not available. please register!",
          status: 404,
        });
      res.json({ message: "You are logged in!" });
    })
    .catch(function (e) {
      next({
        message: e.message,
      });
    });
});

module.exports = router;

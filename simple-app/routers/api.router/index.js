const router = require("express").Router();

const authController = require("../../controllers/auth.controller");
const userController = require("../../controllers/user.controller");

router.use("/auth", authController);
router.use("/users", userController);

module.exports = router;

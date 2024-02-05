var express = require("express");
var router = express.Router();

const userController = require("../controller/userController");

router.post("/login", userController.login);
router.post("/register", userController.registerUser);

module.exports = router;

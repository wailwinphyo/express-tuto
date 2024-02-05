const jwt = require("jsonwebtoken");

const userService = require("../service/userService");
const { config } = require("../config/Config");

const registerUser = async function (req, res) {
  let { username, password } = req.body;
  try {
    let user = await userService.register(username, password);
    let payload = { id: user._id };
    const token = jwt.sign(payload, config.TOKEN_SECRET);
    res.status(200).send({ token });
  } catch (err) {
    res.status(400).send({ message: "User already exists" });
  }
};

const login = async function (req, res) {
  let { username, password } = req.body;
  try {
    let user = await userService.login(username, password);
    let payload = { id: user._id };
    const token = jwt.sign(payload, config.TOKEN_SECRET);
    res.status(200).send({ token });
  } catch (err) {
    res.status(400).send({ message: "Invalid User" });
  }
};

module.exports = {
  login,
  registerUser,
};

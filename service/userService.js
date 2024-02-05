const bcrypt = require("bcrypt");

const User = require("../model/user");

const register = async (username, password) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  let user = new User({
    username,
    password: hashPassword,
  });
  return user.save();
};

const login = async (username, password) => {
  const user = await User.findOne({
    username,
  });
  if (user) {
    const valid = await bcrypt.compare(password, user.password);
    if (valid) return user;
    else throw Error("Invalid user or password");
  }
};

module.exports = {
  register,
  login,
};

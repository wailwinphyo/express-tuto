const jwt = require("jsonwebtoken");
const { config } = require("../config/Config");

const verifyUserToken = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) return res.status(401).send("Access Denied!");

  try {
    token = token.split(" ")[1];
    if (token === "null" || !token)
      return res.status(401).send("Access Denied!");

    let verifiedUser = jwt.verify(token, config.TOKEN_SECRET);

    if (!verifiedUser) return res.status(401).send("Unauthorized");

    req.user = verifiedUser;
    next();
  } catch (err) {
    console.log(err);
    res.status(400).send("Invalid data");
  }
};

module.exports = {
  verifyUserToken,
};

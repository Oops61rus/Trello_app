const jwt = require("jsonwebtoken");
require("dotenv").config();

const privateKey = process.env.JWT_SECRET;

const createToken = (name, email) => {
  return jwt.sign({ expiresIn: "1 days", data: { name, email } }, privateKey);
};

module.exports = createToken;

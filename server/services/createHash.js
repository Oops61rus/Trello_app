require("dotenv").config();
const bcrypt = require("bcrypt");
const salt = process.env.BCRYPT_SALT;

module.exports = (password) => {
  return bcrypt.hashSync(password, salt);
};

const config = require("../config/config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(...config);

const User = require("./user");

sequelize
  .sync()
  .then(() => console.log("Databases created!"))
  .catch((err) => console.log(err));

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully!"))
  .catch((err) => console.log("Unable to connect to database", err));

module.exports = {
  User,
  sequelize,
  Sequelize,
};

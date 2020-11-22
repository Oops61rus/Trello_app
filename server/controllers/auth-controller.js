const createToken = require("../services/createToken");
const createHash = require("../services/createHash");
const checkHash = require("../services/checkHash");
const User = require("../models/user");

module.exports = {
  registerUser: async (req, res) => {
    try {
      const data = req.body;
      data.password = createHash(data.password);

      const user = await User.create({ ...user });

      res.status(201).json({
        name: user.name,
        email: user.email,
        id: user.id,
        token: createToken(data.name, data.email),
      });
    } catch (e) {
      res
        // .status(400)
        .json({ message: "Email alredy exists" });
    }
  },

  loginUser: async (req, res) => {
    const user = req.body;
    try {
      const userDB = await User.findOne({
        where: {
          email: user.email,
        },
      });
      if (!checkHash(user.password, userDB.password))
        throw new Error("Invalid email or password");
      const token = createToken(userDB.name, userDB.email);
      const activeUser = {
        name: userDB.name,
        email: userDB.email,
        id: userDB.id,
        token,
      };
      res.json(activeUser);
    } catch (error) {
      res.json(error);
    }
  },

  checkUser: async (req, res) => {
    const user = req.body;
    try {
      const userDB = await User.findOne({
        where: {
          email: user.email,
        },
      });
      res.data(userDB);
    } catch (err) {
      res.json(err);
    }
  },
};

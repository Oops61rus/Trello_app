const express = require("express");
const controller = require("../controllers");

const router = express.Router();

router.post("/registration", controller.auth.registerUser);

router.post("/login", controller.auth.loginUser);

module.exports = signIn;

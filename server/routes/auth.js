const express = require("express");
const controller = require("../controllers");

const router = express.Router();

router.post("/", (data) => console.log(data), controller.auth.checkUser); // везде добавить валидатор перед контроллером
router.post("/registration", controller.auth.registerUser);
router.post("/login", controller.auth.loginUser);

module.exports = router;

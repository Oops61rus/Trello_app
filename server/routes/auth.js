const express = require('express');
const controller = require('../controllers');
const { body } = require('express-validator');
const { validate } = require('../services/validator');

const router = express.Router();

router.post(
  '/',
  validate([body('email').isEmail().normalizeEmail()]),
  controller.auth.checkUser
);

router.post(
  '/registration',
  validate([
    body('name').not().isEmpty().trim(),
    body('email').not().isEmpty().trim().isEmail().normalizeEmail(),
    body('password').not().isEmpty().isLength({ min: 5 }),
    body('passwordConfirm').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password confirmation doesn't match password");
      }
      return true;
    }),
  ]),
  controller.auth.registerUser
);

router.post(
  '/login',
  validate([
    body('email').not().isEmpty().trim().isEmail().normalizeEmail(),
    body('password').not().isEmpty().isLength({ min: 5 }),
  ]),
  controller.auth.loginUser
);

module.exports = router;

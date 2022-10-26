const express = require('express');
const verifyLoginFields = require('../middlewares/verifyLoginFields');
const { loginController } = require('../controllers');

const router = express.Router();

router.post('/', verifyLoginFields, loginController.login);

module.exports = router;
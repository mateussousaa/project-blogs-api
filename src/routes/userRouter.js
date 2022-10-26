const express = require('express');
const verifyUserSchema = require('../middlewares/verifyUserSchema');
const { userController } = require('../controllers');

const router = express.Router();

router.post('/', verifyUserSchema, userController.insertUser);

module.exports = router;
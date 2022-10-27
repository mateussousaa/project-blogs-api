const express = require('express');
const verifyUserSchema = require('../middlewares/verifyUserSchema');
const authMiddleware = require('../middlewares/authMiddleware');
const { userController } = require('../controllers');

const router = express.Router();

router.post('/', verifyUserSchema, userController.insertUser);

router.get('/', authMiddleware, userController.getUsers);

router.get('/:id', authMiddleware, userController.getUserById);

module.exports = router;
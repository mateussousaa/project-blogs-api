const express = require('express');
const verifyUserSchema = require('../middlewares/verifyUserSchema');
const authMiddleware = require('../middlewares/authMiddleware');
const { userController } = require('../controllers');

const router = express.Router();

router.post('/', verifyUserSchema, userController.insertUser);

router.use(authMiddleware);

router.get('/', userController.getUsers);

router.get('/:id', userController.getUserById);

router.delete('/me', userController.deleteUser);

module.exports = router;
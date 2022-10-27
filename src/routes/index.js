const express = require('express');

const router = express.Router();

const loginRouter = require('./loginRouter');
const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');
const postRouter = require('./postRouter');

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoryRouter);
router.use('/post', postRouter);

module.exports = router;
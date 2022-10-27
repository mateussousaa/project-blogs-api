const express = require('express');

const router = express.Router();

const loginRouter = require('./loginRouter');
const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoryRouter);

module.exports = router;
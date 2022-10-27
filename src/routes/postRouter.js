const express = require('express');

const authMiddleware = require('../middlewares/authMiddleware');
const { postController } = require('../controllers');

const router = express.Router();

router.use(authMiddleware);

router.get('/', postController.getPosts);

module.exports = router;
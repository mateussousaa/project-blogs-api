const express = require('express');

const authMiddleware = require('../middlewares/authMiddleware');
const { postController } = require('../controllers');

const router = express.Router();

router.use(authMiddleware);

router.get('/', postController.getPosts);

router.get('/:id', postController.getPostsById);

module.exports = router;
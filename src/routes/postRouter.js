const express = require('express');

const authMiddleware = require('../middlewares/authMiddleware');
const verifyPostSchema = require('../middlewares/verifyPostSchema');
const { postController } = require('../controllers');

const router = express.Router();

router.use(authMiddleware);

router.post('/', verifyPostSchema, postController.insertPost);

router.get('/', postController.getPosts);

router.get('/:id', postController.getPostsById);

module.exports = router;
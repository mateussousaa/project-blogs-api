const express = require('express');

const authMiddleware = require('../middlewares/authMiddleware');
const verifyPostSchema = require('../middlewares/verifyPostSchema');
const verifyUpdatePost = require('../middlewares/verifyUpdatePost');
const { postController } = require('../controllers');

const router = express.Router();

router.use(authMiddleware);

router.post('/', verifyPostSchema, postController.insertPost);

router.get('/', postController.getPosts);

router.get('/:id', postController.getPostsById);

router.put('/:id', verifyUpdatePost, postController.updatePostById);

module.exports = router;
const { postService } = require('../services');
const mapError = require('../utils/errorMap');

const insertPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const date = new Date();
  const post = { title, content, categoryIds, userId: id, published: date, updated: date };
  
  const { type, message } = await postService.insertPost(post, post.categoryIds);
  
  if (type) {
    return res
      .status(mapError(type))
      .json({ message });
  }
  res.status(201).json(message);
};

const getPosts = async (req, res) => {
  const posts = await postService.getPosts();
  res.status(200).json(posts);
};

const getPostsById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getPostsById(Number(id));
  if (!post) {
    return res.status(mapError('USER_DOESNT_EXIST')).json({ message: 'Post does not exist' });
  }
  res.status(200).json(post);
};

module.exports = { insertPost, getPosts, getPostsById };
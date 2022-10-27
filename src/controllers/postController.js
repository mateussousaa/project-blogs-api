const { postService } = require('../services');
const mapError = require('../utils/errorMap');

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

module.exports = { getPosts, getPostsById };
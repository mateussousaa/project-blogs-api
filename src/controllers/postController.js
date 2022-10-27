const { postService } = require('../services');

const getPosts = async (req, res) => {
  const posts = await postService.getPosts();
  res.status(200).json(posts);
};

module.exports = { getPosts };
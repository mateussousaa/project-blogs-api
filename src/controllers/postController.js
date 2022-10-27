const { postService } = require('../services');
const mapError = require('../utils/errorMap');

const insertPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const date = new Date();
  const post = { title, content, categoryIds, userId: id, published: date, updated: date };
  
  const { type, message } = await postService.insertPost(post, post.categoryIds);
  
  console.log(message);

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

const updatePostById = async (req, res) => {
  const { id } = req.params;
  const { user } = req;
  const { title, content } = req.body;
  const post = await postService.getPostsById(Number(id));
  if (user.id !== post.userId) {
    return res
      .status(mapError('UNAUTHORIZED_USER'))
      .json({ message: 'Unauthorized user' });
  }

  await postService.updatePostById({ title, content }, post.id);
  const updatedPost = await postService.getPostsById(Number(id));
  res.status(200).json(updatedPost);
};

const deletePostById = async (req, res) => {
  const { id } = req.params;
  const { user } = req;
  const post = await postService.getPostsById(Number(id));
  if (!post) {
    return res
    .status(mapError('POST_DOESNT_EXIST'))
    .json({ message: 'Post does not exist' });
  }

  if (user.id !== post.userId) {
    return res
      .status(mapError('UNAUTHORIZED_USER'))
      .json({ message: 'Unauthorized user' });
  }

  await postService.deletePostById(Number(id));

  res.status(204).json();
};

module.exports = { 
  insertPost,
  getPosts,
  getPostsById,
  updatePostById,
  deletePostById,
};
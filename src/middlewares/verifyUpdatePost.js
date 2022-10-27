const mapError = require('../utils/errorMap');

const verifyUpdatePost = (req, res, next) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res
      .status(mapError('FIELDS_ARE_MISSING'))
      .json({ message: 'Some required fields are missing' });
  }

  next();
};

module.exports = verifyUpdatePost;
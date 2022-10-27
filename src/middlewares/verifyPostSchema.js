const mapError = require('../utils/errorMap');

const verifyPostSchema = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds || !categoryIds.length) {
    return res
      .status(mapError('FIELDS_ARE_MISSING'))
      .json({ message: 'Some required fields are missing' });
  }

  next();
};

module.exports = verifyPostSchema;
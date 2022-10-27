const mapError = require('../utils/errorMap');

const verifyCategorySchema = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(mapError('CATEGORY_SCHEMA_INVALID'))
      .json({ message: '"name" is required' }); 
  }

  next();
};

module.exports = verifyCategorySchema;
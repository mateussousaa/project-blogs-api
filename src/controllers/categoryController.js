const { categoryService } = require('../services');

const insertCategory = async (req, res) => {
  const category = await categoryService.insertCategory(req.body);

  res.status(201).json(category);
};

module.exports = { insertCategory };
const { categoryService } = require('../services');

const insertCategory = async (req, res) => {
  const category = await categoryService.insertCategory(req.body);

  res.status(201).json(category);
};

const getCategories = async (req, res) => {
  const categories = await categoryService.getCategories();
  res.status(200).json(categories);
};

module.exports = { insertCategory, getCategories };
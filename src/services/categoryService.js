const { Category } = require('../models');

const insertCategory = async ({ name }) => {
  const newCategory = await Category.create({ name });
  return newCategory;
};

const getCategories = async () => Category.findAll();

module.exports = { insertCategory, getCategories };
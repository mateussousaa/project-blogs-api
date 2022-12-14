const { Op } = require('sequelize');
const { BlogPost, User, PostCategory, Category, sequelize } = require('../models');

const insertPost = async (post, categories) => {
  try {
    const unrepeatedCategories = [...new Set(categories)];

    const result = await sequelize.transaction(async (t) => {
      const createdPost = await BlogPost.create(post, { transaction: t });
      
      const promises = unrepeatedCategories.map(async (c) => PostCategory.create({
        postId: createdPost.id,
        categoryId: c,
      }, { transaction: t }));

      await Promise.all(promises);

      return createdPost.dataValues;
    });
    return { type: null, message: result };
  } catch (e) {
    return { type: 'CATEGORYIDS_NOT_FOUND', message: 'one or more "categoryIds" not found' };
  }
}; 

const getPosts = async () => BlogPost.findAll({
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
});

const getPostsById = async (id) => BlogPost.findByPk(id, {
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
});

const getPostsByTerm = async (term) => {
  const blogs = BlogPost.findAll({
     where: {
      [Op.or]: [
      { title: { [Op.substring]: term } },
      { content: { [Op.substring]: term } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return blogs;
};

const updatePostById = async ({ title, content }, id) => {
  const [affectedRows] = await BlogPost.update({ title, content }, { where: { id } });
  return affectedRows;
};

const deletePostById = async (id) => BlogPost.destroy({ where: { id } });

module.exports = { 
  insertPost,
  getPosts,
  getPostsById,
  getPostsByTerm,
  updatePostById,
  deletePostById,
 };
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
  }, {
    tablename: 'categories',
    timestamps: false,
    underscored: true,
  });

  Category.associate = (models) => {
    Category.hasMany(models.PostsCategories,
      { foreignKey: 'category_id', as: 'categories' })
  }

  return Category;
};
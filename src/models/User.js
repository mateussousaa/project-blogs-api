module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { 
      allowNull: true,
      autoIncrement: true,
      primaryKey: true, 
      type: DataTypes.INTEGER,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tablename: 'users',
    timestamps: false,
    underscored: true,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
      { foreignKey: 'user_id', as: 'blog_posts'});
  }

  return User;
}
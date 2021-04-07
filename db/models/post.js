'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    gallery: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    activity_id: DataTypes.INTEGER,
    state_id: DataTypes.INTEGER
  }, {});
  Post.associate = function (models) {
    Post.hasMany(models.Comment, { foreignKey: 'post_id' })
    Post.belongsTo(models.User, { foreignKey: 'user_id' })
    Post.belongsTo(models.State, { foreignKey: 'state_id' })
    Post.belongsTo(models.Activity, { foreignKey: 'activity_id' })
    // associations can be defined here
  };
  return Post;
};

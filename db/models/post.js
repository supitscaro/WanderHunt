'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    gallery: DataTypes.ARRAY(DataTypes.TEXT),
    user_id: DataTypes.INTEGER,
    activity_id: DataTypes.INTEGER,
    location_id: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    Post.hasMany(models.Comment, {foreignKey: 'postId'})
    Post.belongsTo(models.User, {foreignKey: 'userId'})
    Post.belongsTo(models.State, {foreignKey: 'stateId'})
    Post.belongsTo(models.Activity, {foreignKey: 'activityId'})
    // associations can be defined here
  };
  return Post;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    gallery: DataTypes.ARRAY,
    user_id: DataTypes.INTEGER,
    activity_id: DataTypes.INTEGER,
    location_id: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};
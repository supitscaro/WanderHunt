'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Post, {foreignKey: 'postId'})
    Comment.belongsTo(models.User, {foreignKey: 'userId'})

    // associations can be defined here
  };
  return Comment;
};

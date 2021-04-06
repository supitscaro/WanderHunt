'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false
    }
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Post, { foreignKey: 'user_id' })
    User.hasMany(models.Comment, { foreignKey: 'user_id' })
    // associations can be defined here
  };
  return User;
};

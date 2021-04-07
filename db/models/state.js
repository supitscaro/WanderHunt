'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    name: DataTypes.STRING,
    abbr: DataTypes.STRING
  }, {});
  State.associate = function (models) {
    State.hasMany(models.Post, { foreignKey: 'state_id' })
    // associations can be defined here
  };
  return State;
};

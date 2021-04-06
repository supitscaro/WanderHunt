'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    name: DataTypes.STRING
  }, {});
  State.associate = function(models) {
    State.hasMany(models.Post, {foreignKey: 'stateId'})
    // associations can be defined here
  };
  return State;
};

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT(500),
        allowNull: false
      },
      gallery: {
        type: Sequelize.ARRAY,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Users"}
      },
      activity_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Activities"}
      },
      state_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "States"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Posts');
  }
};

'use strict';

const { sequelize } = require("../models");

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
        type: Sequelize.TEXT,
        allowNull: false
      },
      gallery: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false
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

// 20210406154814-create-comment   20210406154753-create-post

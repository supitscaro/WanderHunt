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
        type: Sequelize.TEXT,
        allowNull: false
      },
      gallery: {
<<<<<<< HEAD:db/migrations/20210406154753-create-post.js
        type: Sequelize.TEXT,
        allowNull: false
=======
        type: Sequelize.STRING
>>>>>>> main:db/migrations/20210406154750-create-post.js
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" }
      },
      state_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
<<<<<<< HEAD:db/migrations/20210406154753-create-post.js
        references: { model: "Activities" }
=======
        references: {model: "States"}
>>>>>>> main:db/migrations/20210406154750-create-post.js
      },
      activity_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
<<<<<<< HEAD:db/migrations/20210406154753-create-post.js
        references: { model: "States" }
=======
        references: {model: "Activities"}
>>>>>>> main:db/migrations/20210406154750-create-post.js
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
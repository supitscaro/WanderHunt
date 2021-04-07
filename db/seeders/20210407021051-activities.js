'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Activities', [
    { name: "Backpacking", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Camping", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Hiking", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Climbing", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Caving", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Ice Climbing", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Mountaineering", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Cycling", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Mountain Biking", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Geocaching", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Running", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Photography", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Exploring", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Snowsports", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Kayaking", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Cruising", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Safari", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Watersports", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Snorkeling", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Picnicing", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Sightseeing", createdAt: new Date(),
    updatedAt: new Date() }
], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Activities', null, {});
  }
};

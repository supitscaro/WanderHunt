'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Activities', [
    { name: "Backpacking" },
    { name: "Camping" },
    { name: "Hiking" },
    { name: "Climbing" },
    { name: "Caving" },
    { name: "Ice Climbing" },
    { name: "Mountaineering" },
    { name: "Cycling" },
    { name: "Mountain Biking" },
    { name: "Geocaching" },
    { name: "Running" },
    { name: "Photography" },
    { name: "Exploring" },
    { name: "Snowsports" },
    { name: "Kayaking" },
    { name: "Kayaking" },
    { name: "Cruising" },
    { name: "Safari" },
    { name: "Watersports" },
    { name: "Snorkeling" },
    { name: "picnicing" },
    { name: "Sightseeing" }
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

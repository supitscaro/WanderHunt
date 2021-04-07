'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('States', [
    { name: "Alabama", abbr: "AL", createdAt: new Date(),
    updatedAt: new Date()},
    { name: "Alaska", abbr: "AK", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Arizona", abbr: "AZ", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Arkansa", abbr: "AR", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "California", abbr: "CO", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Connecticut", abbr: "CT", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Delaware", abbr: "DE", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Florida", abbr: "FL", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Georgia", abbr: "GA", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Hawaii", abbr: "HI", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Idaho", abbr: "ID", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Illinois", abbr: "IL", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Indiana", abbr: "IN", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Iowa", abbr: "IA", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Kansas", abbr: "KS", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Kentucky", abbr: "KY", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Louisiana", abbr: "LA", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Maine", abbr: "ME", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Maryland", abbr: "MD", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Massachusetts", abbr: "MA", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Michigan", abbr: "MI", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Minnesota", abbr: "MN", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Mississippi", abbr: "MS", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Missouri", abbr: "MO", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Montana", abbr: "MT", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Nebraska", abbr: "NE", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Nevada", abbr: "NV", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "New Hampshire", abbr: "NH", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "New Jersey", abbr: "NJ", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "New Mexico", abbr: "NM", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "New York", abbr: "NY", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "North Carolina", abbr: "NC", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "North Dakota", abbr: "ND", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Ohio", abbr: "OH", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Oklahoma", abbr: "OK", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Oregon", abbr: "OR", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Pennsylvania", abbr: "PA", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Rhode Island", abbr: "RI", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "South Carolina", abbr: "SC", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "South Dakota", abbr: "SD", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Tennessee", abbr: "TN", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Texas", abbr: "TX", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Utah", abbr: "UT", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Vermont", abbr: "VT", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Virginia", abbr: "VA", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Washington", abbr: "WA", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "West Virginia", abbr: "WV", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Wisconsin", abbr: "WI", createdAt: new Date(),
    updatedAt: new Date() },
    { name: "Wyoming", abbr: "WY", createdAt: new Date(),
    updatedAt: new Date() }
], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('States', null, {});
  }
};

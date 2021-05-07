'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user',
      [{
        roomId: 1,
        username: 'santo_domingo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roomId: 1,
        username: 'dominico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roomId: 2,
        username: 'monista',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roomId: 2,
        username: 'dualista',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});

  }
};

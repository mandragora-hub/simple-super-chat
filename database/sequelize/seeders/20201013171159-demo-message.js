'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('message',
      [{
        roomId: 1,
        userId: 1,
        body: 'Hola',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roomId: 1,
        userId: 2,
        body: 'Esto es un mensaje',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roomId: 2,
        userId: 3,
        body: 'BLABLA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roomId: 1,
        userId: 4,
        body: 'BLABLABLA',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('message', null, {});

  }
};

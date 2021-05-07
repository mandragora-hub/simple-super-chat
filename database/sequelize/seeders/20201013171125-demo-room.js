'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('room', [{
      uuid: uuidv4(),
      roomName: 'My room',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      uuid: uuidv4(),
      roomName: 'INSPLII',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('room', null, {});

  }
};

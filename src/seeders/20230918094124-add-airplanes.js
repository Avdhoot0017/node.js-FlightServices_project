'use strict';

const { Op } = require('sequelize')

const { data } = require('../utils/common/error-responce');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes' , [
      {
        modelNumber:'Airbus34',
        capacity: 900,
        createdAt:  new Date(),
        updatedAt: new Date()
      },

      {

        modelNumber:'boing56',
        capacity: 90,
        createdAt:  new Date(),
        updatedAt: new Date()


      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */


    await queryInterface.bulkDelete('Airplanes' , 
    {[Op.or]: 
      [{modelNumber:'Airbus34'},
      { modelNumber:'boing56'}
      ]
    });

  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addConstraint('Airports',{
      type: 'FOREIGN KEY',
      name: 'cityF_key_constriane',
      fields: ['cityId'],
      references: {
        table: 'cities',
        field: 'id'

      },
      // onUpdate: 'CASCADE'?
      onDelete: 'CASCADE'

    });

  },

  async down (queryInterface, Sequelize) {


    await queryInterface.removeConstraint('Airports','cityF_key_constriane');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

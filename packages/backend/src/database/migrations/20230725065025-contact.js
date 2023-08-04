'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('contact', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
        values: ['Male', 'Female', 'Other'],
      },
      dob: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      mobile: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      telephone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      address1: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [2, 100],
        },
      },
      address2: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          len: [2, 100],
        },
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      blood_group: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      created_by: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      updated_by: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      deleted_by: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('contact')
  },
}

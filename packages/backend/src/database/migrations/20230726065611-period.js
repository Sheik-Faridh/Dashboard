'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('period', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      day: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [3, 20],
        },
      },
      start_time: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: /^([01]\d|2[0-3]):([0-5]\d)$/, // Regular expression to validate HH:mm format
        },
      },
      end_time: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: /^([01]\d|2[0-3]):([0-5]\d)$/, // Regular expression to validate HH:mm format
        },
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
        allowNull: true,
        defaultValue: null,
        type: Sequelize.INTEGER,
      },
      updated_by: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.INTEGER,
      },
      deleted_by: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.INTEGER,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('period')
  },
}

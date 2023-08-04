'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('work_experience', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      company_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      designation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      start_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      end_date: {
        type: Sequelize.DATEONLY,
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
    await queryInterface.dropTable('work_experience')
  },
}

'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('faculty_attendence', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      faculty_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'faculty', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      in_time: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: /^([01]\d|2[0-3]):([0-5]\d)$/, // Regular expression to validate HH:mm format
        },
      },
      out_time: {
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

    return await queryInterface.addConstraint('faculty_attendence', {
      type: 'foreign key',
      fields: ['faculty_id'],
      name: 'fk_faculty_attendence_faculty_id',
      references: {
        table: 'faculty',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  },

  async down(queryInterface, Sequelize) {
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'faculty_attendence',
      'fk_faculty_attendence_faculty_id',
    )

    await queryInterface.dropTable('faculty_attendence')
  },
}

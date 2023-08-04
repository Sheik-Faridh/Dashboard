'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('faculty_vacation_request', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      faculty_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'faculty', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      number_of_day: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          len: [1, 5],
        },
      },
      start_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      end_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      approved_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'faculty', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      remarks: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          len: [10, 300],
        },
      },
      comment: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          len: [10, 300],
        },
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        values: ['Pending', 'Approved', 'Rejected'],
      },
      leave_type: {
        type: Sequelize.STRING,
        allowNull: false,
        values: [
          'Paid Leave',
          'Loss Of Pay',
          'Compensatory',
          'Maternity',
          'Paternity',
        ],
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

    await queryInterface.addConstraint('faculty_vacation_request', {
      type: 'foreign key',
      fields: ['faculty_id'],
      name: 'fk_faculty_vacation_request_faculty_id',
      references: {
        table: 'faculty',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('faculty_vacation_request', {
      type: 'foreign key',
      fields: ['approved_by'],
      name: 'fk_faculty_vacation_request_approved_by',
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
      'faculty_vacation_request',
      'fk_faculty_vacation_request_faculty_id',
    )
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'faculty_vacation_request',
      'fk_faculty_vacation_request_approved_by',
    )

    await queryInterface.dropTable('faculty_vacation_request')
  },
}

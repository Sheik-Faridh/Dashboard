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
      status_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'vacation_status', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      leave_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'leave_type', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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

    await queryInterface.addConstraint('faculty_vacation_request', {
      type: 'foreign key',
      fields: ['status_id'],
      name: 'fk_faculty_vacation_request_status_id',
      references: {
        table: 'vacation_status',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('faculty_vacation_request', {
      type: 'foreign key',
      fields: ['leave_type_id'],
      name: 'fk_faculty_vacation_request_leave_type_id',
      references: {
        table: 'leave_type',
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
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'faculty_vacation_request',
      'fk_faculty_vacation_request_status_id',
    )
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'faculty_vacation_request',
      'fk_faculty_vacation_request_leave_type_id',
    )

    await queryInterface.dropTable('faculty_vacation_request')
  },
}

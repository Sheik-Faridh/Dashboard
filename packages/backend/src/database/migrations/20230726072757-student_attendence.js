'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('student_attendence', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      session_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'session', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      student_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'student', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      status_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'attendence_status', key: 'id' },
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

    await queryInterface.addConstraint('student_attendence', {
      type: 'foreign key',
      fields: ['student_id'],
      name: 'fk_student_attendence_student_id',
      references: {
        table: 'student',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('student_attendence', {
      type: 'foreign key',
      fields: ['status_id'],
      name: 'fk_student_attendence_status_id',
      references: {
        table: 'attendence_status',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('student_attendence', {
      type: 'foreign key',
      fields: ['session_id'],
      name: 'fk_student_attendence_session_id',
      references: {
        table: 'session',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  },

  async down(queryInterface, Sequelize) {
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'student_attendence',
      'fk_student_attendence_student_id',
    )
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'student_attendence',
      'fk_student_attendence_status_id',
    )
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'student_attendence',
      'fk_student_attendence_session_id',
    )

    await queryInterface.dropTable('student_attendence')
  },
}

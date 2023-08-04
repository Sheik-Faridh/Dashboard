'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('course_exam_result', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      course_exam_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'course_exam', key: 'id' },
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
      evaluated_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'faculty', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      mark_scored: {
        allowNull: false,
        type: Sequelize.INTEGER,
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

    await queryInterface.addConstraint('course_exam_result', {
      type: 'foreign key',
      fields: ['course_exam_id'],
      name: 'fk_course_exam_result_course_exam_id',
      references: {
        table: 'course_exam',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('course_exam_result', {
      type: 'foreign key',
      fields: ['student_id'],
      name: 'fk_course_exam_result_student_id',
      references: {
        table: 'student',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('course_exam_result', {
      type: 'foreign key',
      fields: ['evaluated_by'],
      name: 'fk_course_exam_result_evaluated_by',
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
      'course_exam_result',
      'fk_course_exam_result_course_exam_id',
    )
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'course_exam_result',
      'fk_course_exam_result_student_id',
    )
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'course_exam_result',
      'fk_course_exam_result_evaluated_by',
    )

    await queryInterface.dropTable('course_exam_result')
  },
}

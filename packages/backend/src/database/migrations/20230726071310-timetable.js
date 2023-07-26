'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('timetable', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      period_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'period', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      class_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'class', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'course', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      faculty_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'faculty', key: 'id' },
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
    })

    await queryInterface.addConstraint('timetable', {
      type: 'foreign key',
      fields: ['class_id'],
      name: 'fk_timetable_class_id',
      references: {
        table: 'class',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('timetable', {
      type: 'foreign key',
      fields: ['period_id'],
      name: 'fk_timetable_period_id',
      references: {
        table: 'period',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('timetable', {
      type: 'foreign key',
      fields: ['course_id'],
      name: 'fk_timetable_course_id',
      references: {
        table: 'course',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('timetable', {
      type: 'foreign key',
      fields: ['faculty_id'],
      name: 'fk_timetable_faculty_id',
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
    await queryInterface.removeConstraint('timetable', 'fk_timetable_class_id')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('timetable', 'fk_timetable_period_id')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('timetable', 'fk_timetable_course_id')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'timetable',
      'fk_timetable_faculty_id',
    )

    await queryInterface.dropTable('timetable')
  },
}

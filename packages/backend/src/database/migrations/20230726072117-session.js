'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('session', {
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

    await queryInterface.addConstraint('session', {
      type: 'foreign key',
      fields: ['class_id'],
      name: 'fk_session_class_id',
      references: {
        table: 'class',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('session', {
      type: 'foreign key',
      fields: ['period_id'],
      name: 'fk_session_period_id',
      references: {
        table: 'period',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('session', {
      type: 'foreign key',
      fields: ['course_id'],
      name: 'fk_session_course_id',
      references: {
        table: 'course',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('session', {
      type: 'foreign key',
      fields: ['faculty_id'],
      name: 'fk_session_faculty_id',
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
    await queryInterface.removeConstraint('session', 'fk_session_class_id')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('session', 'fk_session_period_id')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('session', 'fk_session_course_id')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('session', 'fk_session_faculty_id')

    await queryInterface.dropTable('session')
  },
}

'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('faculty_salary', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      grade_level_id: {
        type: Sequelize.INTEGER,
        references: { model: 'salary_grade', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      faculty_id: {
        type: Sequelize.INTEGER,
        references: { model: 'faculty', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      salary: {
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

    // Add foreign key constraint for referencing association
    await queryInterface.addConstraint('faculty_salary', {
      type: 'foreign key',
      fields: ['grade_level_id'],
      name: 'fk_faculty_salary_grade_level_id',
      references: {
        table: 'salary_grade',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('faculty_salary', {
      type: 'foreign key',
      fields: ['faculty_id'],
      name: 'fk_faculty_salary_faculty_id',
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
      'faculty_salary',
      'fk_faculty_salary_grade_level_id',
    )
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'faculty_salary',
      'fk_faculty_salary_faculty_id',
    )

    await queryInterface.dropTable('faculty_salary')
  },
}

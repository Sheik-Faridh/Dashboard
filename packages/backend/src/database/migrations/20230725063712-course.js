'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('course', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      department_id: {
        type: Sequelize.INTEGER,
        references: { model: 'department', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      course_code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
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

    // Add foreign key constraint for referencing association
    return await queryInterface.addConstraint('course', {
      type: 'foreign key',
      fields: ['department_id'],
      name: 'fk_course_department_id',
      references: {
        table: 'department',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  },

  async down(queryInterface, Sequelize) {
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('course', 'fk_course_department_id')

    await queryInterface.dropTable('course')
  },
}

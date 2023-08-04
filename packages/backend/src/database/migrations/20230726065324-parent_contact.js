'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('parent_contact', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      student_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'student', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      father_name: {
        type: Sequelize.INTEGER,
      },
      father_contact_number: {
        type: Sequelize.STRING,
      },
      mother_name: {
        type: Sequelize.INTEGER,
      },
      mother_contact_number: {
        type: Sequelize.STRING,
      },
      guardian_name: {
        type: Sequelize.INTEGER,
      },
      guardian_contact_number: {
        type: Sequelize.STRING,
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

    return await queryInterface.addConstraint('parent_contact', {
      type: 'foreign key',
      fields: ['student_id'],
      name: 'fk_parent_contact_student_id',
      references: {
        table: 'student',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  },

  async down(queryInterface, Sequelize) {
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'parent_contact',
      'fk_parent_contact_student_id',
    )

    await queryInterface.dropTable('parent_contact')
  },
}

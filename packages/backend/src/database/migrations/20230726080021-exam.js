'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('exam', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      exam_name_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'exam_name', key: 'id' },
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
      start_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: false,
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

    await queryInterface.addConstraint('exam', {
      type: 'foreign key',
      fields: ['exam_name_id'],
      name: 'fk_exam_exam_name_id',
      references: {
        table: 'exam_name',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('exam', {
      type: 'foreign key',
      fields: ['class_id'],
      name: 'fk_exam_class_id',
      references: {
        table: 'class',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  },

  async down(queryInterface, Sequelize) {
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('exam', 'fk_exam_exam_name_id')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('exam', 'fk_exam_class_id')

    await queryInterface.dropTable('exam')
  },
}

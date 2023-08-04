'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('student_promotion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      promoted_from: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'class', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      promoted_to: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'class', key: 'id' },
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

    await queryInterface.addConstraint('student_promotion', {
      type: 'foreign key',
      fields: ['promoted_from'],
      name: 'fk_student_promotion_promoted_from',
      references: {
        table: 'class',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('student_promotion', {
      type: 'foreign key',
      fields: ['promoted_to'],
      name: 'fk_student_promotion_promoted_to',
      references: {
        table: 'class',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('student_promotion', {
      type: 'foreign key',
      fields: ['student_id'],
      name: 'fk_student_promotion_student_id',
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
      'student_promotion',
      'fk_student_promotion_promoted_from',
    )
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'student_promotion',
      'fk_student_promotion_promoted_to',
    )
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'student_promotion',
      'fk_student_promotion_student_id',
    )

    await queryInterface.dropTable('student_promotion')
  },
}

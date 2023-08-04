'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('salary_hike', {
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
      old_salary: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      revised_salary: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      effective_from: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      reviewer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'faculty', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      rating: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          len: [1, 5],
        },
      },
      comment: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          len: [10, 300],
        },
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

    await queryInterface.addConstraint('salary_hike', {
      type: 'foreign key',
      fields: ['faculty_id'],
      name: 'fk_salary_hike_faculty_id',
      references: {
        table: 'faculty',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('salary_hike', {
      type: 'foreign key',
      fields: ['reviewer_id'],
      name: 'fk_salary_hike_reviewer_id',
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
      'salary_hike',
      'fk_salary_hike_faculty_id',
    )
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'salary_hike',
      'fk_salary_hike_reviewer_id',
    )

    await queryInterface.dropTable('salary_hike')
  },
}

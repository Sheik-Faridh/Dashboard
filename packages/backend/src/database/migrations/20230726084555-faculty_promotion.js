'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('faculty_promotion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      old_designation_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'designation', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      new_designation_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'designation', key: 'id' },
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

    await queryInterface.addConstraint('faculty_promotion', {
      type: 'foreign key',
      fields: ['old_designation_id'],
      name: 'fk_faculty_promotion_old_designation_id',
      references: {
        table: 'designation',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('faculty_promotion', {
      type: 'foreign key',
      fields: ['new_designation_id'],
      name: 'fk_faculty_promotion_new_designation_id',
      references: {
        table: 'designation',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('faculty_promotion', {
      type: 'foreign key',
      fields: ['faculty_id'],
      name: 'fk_faculty_promotion_faculty_id',
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
      'faculty_promotion',
      'fk_faculty_promotion_old_designation_id',
    )
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'faculty_promotion',
      'fk_faculty_promotion_new_designation_id',
    )
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'faculty_promotion',
      'fk_faculty_promotion_faculty_id',
    )

    await queryInterface.dropTable('faculty_promotion')
  },
}

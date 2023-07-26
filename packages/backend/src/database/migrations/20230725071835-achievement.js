'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('achievement', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [10, 100],
        },
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [10, 300],
        },
      },
      attachment_id: {
        type: Sequelize.INTEGER,
        references: { model: 'attachment', key: 'id' },
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

    // Add foreign key constraint for referencing association
    return await queryInterface.addConstraint('achievement', {
      type: 'foreign key',
      fields: ['attachment_id'],
      name: 'fk_achievement_attachment_id',
      references: {
        table: 'attachment',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  },

  async down(queryInterface, Sequelize) {
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'achievement',
      'fk_achievement_attachment_id',
    )

    await queryInterface.dropTable('achievement')
  },
}

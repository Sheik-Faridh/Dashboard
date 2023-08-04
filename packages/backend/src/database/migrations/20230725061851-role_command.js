'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('role_command', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      role_id: {
        type: Sequelize.INTEGER,
        references: { model: 'role', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      command_id: {
        type: Sequelize.INTEGER,
        references: { model: 'command', key: 'id' },
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

    // Add foreign key constraint for referencing association
    await queryInterface.addConstraint('role_command', {
      type: 'foreign key',
      fields: ['command_id'],
      name: 'fk_role_command_command_id',
      references: {
        table: 'command',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('role_command', {
      type: 'foreign key',
      fields: ['role_id'],
      name: 'fk_role_command_role_id',
      references: {
        table: 'role',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  },

  async down(queryInterface, Sequelize) {
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'role_command',
      'fk_role_command_command_id',
    )
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'role_command',
      'fk_role_command_role_id',
    )

    await queryInterface.dropTable('role_command')
  },
}

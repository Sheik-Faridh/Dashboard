'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      activation_token: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      token_expires_on: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      organization_id: {
        type: Sequelize.INTEGER,
        references: { model: 'organization', key: 'id' },
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
    return await queryInterface.addConstraint('user', {
      type: 'foreign key',
      fields: ['organization_id'],
      name: 'fk_user_organization_id',
      references: {
        table: 'organization',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  },

  async down(queryInterface, Sequelize) {
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('user', 'fk_user_organization_id')

    await queryInterface.dropTable('user')
  },
}

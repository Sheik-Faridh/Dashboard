'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('work_publish', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [10, 200],
        },
      },
      link: {
        type: Sequelize.STRING,
        allowNull: true,
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
    return await queryInterface.addConstraint('work_publish', {
      type: 'foreign key',
      fields: ['attachment_id'],
      name: 'fk_work_publish_attachment_id',
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
      'work_publish',
      'fk_work_publish_attachment_id',
    )

    await queryInterface.dropTable('work_publish')
  },
}

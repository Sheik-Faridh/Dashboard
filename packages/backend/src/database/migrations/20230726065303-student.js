'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('student', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      roll_number: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'user', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      department_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'department', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      student_type: {
        type: Sequelize.STRING,
        allowNull: false,
        values: ['Regular', 'Lateral Entry'],
      },
      join_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      relieve_date: {
        type: Sequelize.DATEONLY,
        defaultValue: null,
        allowNull: true,
      },
      contact_id: {
        type: Sequelize.INTEGER,
        references: { model: 'contact', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      mentor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'faculty', key: 'id' },
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
      section_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'section', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      work_publish: {
        type: Sequelize.INTEGER,
        references: { model: 'work_publish', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      certification: {
        type: Sequelize.INTEGER,
        references: { model: 'certification', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      achievement: {
        type: Sequelize.INTEGER,
        references: { model: 'achievement', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      bank_detail: {
        type: Sequelize.INTEGER,
        references: { model: 'bank_detail', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      social_media_platform: {
        type: Sequelize.INTEGER,
        references: { model: 'user_social_media', key: 'id' },
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
    await queryInterface.addConstraint('student', {
      type: 'foreign key',
      fields: ['user_id'],
      name: 'fk_student_user_id',
      references: {
        table: 'user',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('student', {
      type: 'foreign key',
      fields: ['department_id'],
      name: 'fk_student_department_id',
      references: {
        table: 'department',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('student', {
      type: 'foreign key',
      fields: ['contact_id'],
      name: 'fk_student_contact_id',
      references: {
        table: 'contact',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('student', {
      type: 'foreign key',
      fields: ['mentor_id'],
      name: 'fk_student_mentor_id',
      references: {
        table: 'faculty',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('student', {
      type: 'foreign key',
      fields: ['class_id'],
      name: 'fk_student_class_id',
      references: {
        table: 'class',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('student', {
      type: 'foreign key',
      fields: ['section_id'],
      name: 'fk_student_section_id',
      references: {
        table: 'section',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('student', {
      type: 'foreign key',
      fields: ['work_publish'],
      name: 'fk_student_work_publish',
      references: {
        table: 'work_publish',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('student', {
      type: 'foreign key',
      fields: ['certification'],
      name: 'fk_student_certification',
      references: {
        table: 'certification',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('student', {
      type: 'foreign key',
      fields: ['bank_detail'],
      name: 'fk_student_bank_detail',
      references: {
        table: 'bank_detail',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('student', {
      type: 'foreign key',
      fields: ['social_media_platform'],
      name: 'fk_student_social_media_platform',
      references: {
        table: 'user_social_media',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  },

  async down(queryInterface, Sequelize) {
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('student', 'fk_student_user_id')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('student', 'fk_student_department_id')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('student', 'fk_student_contact_id')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('student', 'fk_student_mentor_id')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('student', 'fk_student_class_id')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('student', 'fk_student_section_id')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('student', 'fk_student_work_publish')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('student', 'fk_student_certification')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('student', 'fk_student_bank_detail')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'student',
      'fk_student_social_media_platform',
    )

    await queryInterface.dropTable('student')
  },
}

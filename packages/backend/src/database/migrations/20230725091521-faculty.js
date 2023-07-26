'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('faculty', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      reg_number: {
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
      designation_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'designation', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      employment_type: {
        type: Sequelize.STRING,
        allowNull: false,
        values: ['Permanent', 'Temporary'],
      },
      hire_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      relieve_date: {
        type: Sequelize.DATEONLY,
        defaultValue: null,
        allowNull: true,
      },
      years_of_experience: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      contact_id: {
        type: Sequelize.INTEGER,
        references: { model: 'contact', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      reporting_to: {
        type: Sequelize.INTEGER,
        references: { model: 'faculty', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      course_id: {
        type: Sequelize.INTEGER,
        references: { model: 'course', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      work_experience: {
        type: Sequelize.INTEGER,
        references: { model: 'work_experience', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      incharge_of: {
        type: Sequelize.INTEGER,
        references: { model: 'class', key: 'id' },
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
    await queryInterface.addConstraint('faculty', {
      type: 'foreign key',
      fields: ['user_id'],
      name: 'fk_faculty_user_id',
      references: {
        table: 'user',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('faculty', {
      type: 'foreign key',
      fields: ['department_id'],
      name: 'fk_faculty_department_id',
      references: {
        table: 'department',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('faculty', {
      type: 'foreign key',
      fields: ['designation_id'],
      name: 'fk_faculty_designation_id',
      references: {
        table: 'designation',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('faculty', {
      type: 'foreign key',
      fields: ['contact_id'],
      name: 'fk_faculty_contact_id',
      references: {
        table: 'contact',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('faculty', {
      type: 'foreign key',
      fields: ['reporting_to'],
      name: 'fk_faculty_reporting_to',
      references: {
        table: 'faculty',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('faculty', {
      type: 'foreign key',
      fields: ['course_id'],
      name: 'fk_faculty_course_id',
      references: {
        table: 'course',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('faculty', {
      type: 'foreign key',
      fields: ['work_experience'],
      name: 'fk_faculty_work_experience',
      references: {
        table: 'work_experience',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('faculty', {
      type: 'foreign key',
      fields: ['incharge_of'],
      name: 'fk_faculty_incharge_of',
      references: {
        table: 'class',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('faculty', {
      type: 'foreign key',
      fields: ['work_publish'],
      name: 'fk_faculty_work_publish',
      references: {
        table: 'work_publish',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('faculty', {
      type: 'foreign key',
      fields: ['certification'],
      name: 'fk_faculty_certification',
      references: {
        table: 'certification',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('faculty', {
      type: 'foreign key',
      fields: ['bank_detail'],
      name: 'fk_faculty_bank_detail',
      references: {
        table: 'bank_detail',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    await queryInterface.addConstraint('faculty', {
      type: 'foreign key',
      fields: ['social_media_platform'],
      name: 'fk_faculty_social_media_platform',
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
    await queryInterface.removeConstraint('faculty', 'fk_faculty_user_id')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('faculty', 'fk_faculty_department_id')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'faculty',
      'fk_faculty_designation_id',
    )
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('faculty', 'fk_faculty_contact_id')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('faculty', 'fk_faculty_reporting_to')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('faculty', 'fk_faculty_course_id')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'faculty',
      'fk_faculty_work_experience',
    )
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('faculty', 'fk_faculty_incharge_of')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('faculty', 'fk_faculty_work_publish')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('faculty', 'fk_faculty_certification')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint('faculty', 'fk_faculty_bank_detail')
    // Remove the foreign key constraint first to avoid errors during rollback
    await queryInterface.removeConstraint(
      'faculty',
      'fk_faculty_social_media_platform',
    )

    await queryInterface.dropTable('faculty')
  },
}

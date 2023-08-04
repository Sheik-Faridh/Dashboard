'use strict'
import bcrypt from 'bcrypt'
import config from '@/config'
import { getRandomBytes } from '@/helpers/utils'
const { SALT_ROUND, COOKIE_MAX_AGE } = config

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const defaultAttendenceStatus = [
      {
        name: 'Present',
        created_at: new Date(),
        updated_at: new Date(),
        created_by: 0,
        updated_by: 0,
      },
      {
        name: 'Absent',
        created_at: new Date(),
        updated_at: new Date(),
        created_by: 0,
        updated_by: 0,
      },
    ]
    const defaultEmploymentType = [
      {
        name: 'Permanent',
        created_at: new Date(),
        updated_at: new Date(),
        created_by: 0,
        updated_by: 0,
      },
      {
        name: 'Temporary',
        created_at: new Date(),
        updated_at: new Date(),
        created_by: 0,
        updated_by: 0,
      },
    ]
    const defaultStudentType = [
      {
        name: 'Regular',
        created_at: new Date(),
        updated_at: new Date(),
        created_by: 0,
        updated_by: 0,
      },
      {
        name: 'Lateral Entry',
        created_at: new Date(),
        updated_at: new Date(),
        created_by: 0,
        updated_by: 0,
      },
    ]
    const defaultLeaveType = [
      {
        name: 'Paid Leave',
        created_at: new Date(),
        updated_at: new Date(),
        created_by: 0,
        updated_by: 0,
      },
      {
        name: 'Loss Of Pay',
        created_at: new Date(),
        updated_at: new Date(),
        created_by: 0,
        updated_by: 0,
      },
      {
        name: 'Compensatory',
        created_at: new Date(),
        updated_at: new Date(),
        created_by: 0,
        updated_by: 0,
      },
      {
        name: 'Maternity',
        created_at: new Date(),
        updated_at: new Date(),
        created_by: 0,
        updated_by: 0,
      },
      {
        name: 'Paternity',
        created_at: new Date(),
        updated_at: new Date(),
        created_by: 0,
        updated_by: 0,
      },
    ]
    const defaultVacationStatus = [
      {
        name: 'Pending',
        created_at: new Date(),
        updated_at: new Date(),
        created_by: 0,
        updated_by: 0,
      },
      {
        name: 'Approved',
        created_at: new Date(),
        updated_at: new Date(),
        created_by: 0,
        updated_by: 0,
      },
      {
        name: 'Declined',
        created_at: new Date(),
        updated_at: new Date(),
        created_by: 0,
        updated_by: 0,
      },
      {
        name: 'Cancel Pending',
        created_at: new Date(),
        updated_at: new Date(),
        created_by: 0,
        updated_by: 0,
      },
      {
        name: 'Cancel Approved',
        created_at: new Date(),
        updated_at: new Date(),
        created_by: 0,
        updated_by: 0,
      },
      {
        name: 'Cancel Declined',
        created_at: new Date(),
        updated_at: new Date(),
        created_by: 0,
        updated_by: 0,
      },
    ]
    await Promise.all([
      queryInterface.bulkInsert(
        'attendence_status',
        defaultAttendenceStatus,
        {},
      ),
      queryInterface.bulkInsert('employment_type', defaultEmploymentType, {}),
      queryInterface.bulkInsert('student_type', defaultStudentType, {}),
      queryInterface.bulkInsert('leave_type', defaultLeaveType, {}),
      queryInterface.bulkInsert('vacation_status', defaultVacationStatus, {}),
    ])
  },

  async down(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.bulkDelete('attendence_status', null, {}),
      queryInterface.bulkDelete('employment_type', null, {}),
      queryInterface.bulkDelete('student_type', null, {}),
      queryInterface.bulkDelete('leave_type', null, {}),
      queryInterface.bulkDelete('vacation_status', null, {}),
    ])
  },
}

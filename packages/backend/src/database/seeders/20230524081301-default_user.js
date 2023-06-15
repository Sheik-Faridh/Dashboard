'use strict'
import bcrypt from 'bcrypt'
import config from '@/config'
const { SALT_ROUND } = config

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const defaultUsers = [
      {
        name: 'Test User',
        email: 'test@gmail.com',
        password: await bcrypt.hash('Password@123', SALT_ROUND),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
    await queryInterface.bulkInsert('Users', defaultUsers, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  },
}

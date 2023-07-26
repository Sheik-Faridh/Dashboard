'use strict'
import bcrypt from 'bcrypt'
import config from '@/config'
import { getRandomBytes } from '@/helpers/utils'
const { SALT_ROUND, COOKIE_MAX_AGE } = config

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const defaultUsers = [
      {
        name: 'Test User',
        email: 'test@gmail.com',
        password: await bcrypt.hash('Password@123', SALT_ROUND),
        activation_token: await getRandomBytes(),
        token_expires_on: new Date(Date.now() + COOKIE_MAX_AGE),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]
    await queryInterface.bulkInsert('user', defaultUsers, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {})
  },
}

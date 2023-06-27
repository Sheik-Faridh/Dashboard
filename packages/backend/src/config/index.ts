import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'
import { Dialect } from 'sequelize'

type Config = {
  PORT: number
  NODE_ENV: string
  REDIS_URL: string
  DB_NAME: string
  DB_USERNAME: string
  DB_PASSWORD: string
  DB_PORT: number
  DB_DIALECT: Dialect
  DB_HOST: string
  SESSION_SECRET: string
  SALT_ROUND: number
  COOKIE_MAX_AGE: number
  GOOGLE_CLIENT_ID: string
  GOOGLE_CLIENT_SECRET: string
  GOOGLE_CALLBACK_URL: string
  BYTESLENGTH: number
  MAIL_USERNAME: string
  MAIL_PASSWORD: string
  EMAIL_ID: string
  MAIL_HOST: string
  MAIL_PORT: number
  CLIENT_HOST: string
}

// Load environment-specific variables based on the NODE_ENV value
if (fs.existsSync(path.resolve(__dirname, '../secrets/.env.development')))
  dotenv.config({
    path: path.resolve(__dirname, '../secrets/.env.development'),
  })
else if (fs.existsSync(path.resolve(__dirname, '../secrets/.env.production')))
  dotenv.config({
    path: path.resolve(__dirname, '../secrets/.env.production'),
  })
else console.error('.env file not found')

export default {
  PORT: Number(process.env.PORT),
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  REDIS_URL: process.env.REDIS_URL,
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: Number(process.env.DB_PORT),
  DB_DIALECT: process.env.DB_DIALECT,
  DB_HOST: process.env.DB_HOST,
  SESSION_SECRET: process.env.SESSION_SECRET,
  SALT_ROUND: 10,
  COOKIE_MAX_AGE: 24 * 60 * 60 * 1000,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
  MAIL_USERNAME: process.env.MAIL_USERNAME,
  MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  EMAIL_ID: `"SpaceDesk Support" <support@spacedesk.com>`,
  BYTESLENGTH: 48,
  MAIL_HOST: process.env.MAIL_HOST,
  MAIL_PORT: Number(process.env.MAIL_PORT),
  CLIENT_HOST: process.env.CLIENT_HOST,
} as Config

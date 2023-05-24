import dotenv from 'dotenv'
import path from 'path'
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
  SALT_ROUND: number
}

// Load environment-specific variables based on the NODE_ENV value
if (process.env.NODE_ENV === 'production')
  dotenv.config({
    path: path.resolve(__dirname, '../secrets/.env.production'),
  })
else
  dotenv.config({
    path: path.resolve(__dirname, '../secrets/.env.development'),
  })

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
  SALT_ROUND: 10,
} as Config

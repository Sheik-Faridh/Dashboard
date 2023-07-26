import config from '.'
import { Options } from 'sequelize'

const { DB_NAME, DB_DIALECT, DB_PASSWORD, DB_PORT, DB_USERNAME, DB_HOST } =
  config

export default {
  dialect: DB_DIALECT,
  database: DB_NAME,
  host: DB_HOST,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  port: DB_PORT,
  dialectOptions: {
    charset: 'utf8mb4',
  },
  define: {
    paranoid: true,
    timestamps: true,
    underscored: true,
  },
} as Options

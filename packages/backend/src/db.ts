import { Sequelize } from 'sequelize'
import dbConfig from '@/config/db'

const sequelize = new Sequelize({
  ...dbConfig,
})

export default sequelize
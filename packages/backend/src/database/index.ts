import { Sequelize } from 'sequelize'
import dbConfig from '@/config/db'
import { initModels } from '@/models/init-models'

const sequelize = new Sequelize({
  ...dbConfig,
})

export const models = initModels(sequelize)

export default sequelize

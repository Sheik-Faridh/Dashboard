import { Sequelize } from 'sequelize'
import dbConfig from '@/config/db'
import { initModels } from '@/models/init-models'
import namespace from './cls'
import {
  beforeBulkCreate,
  beforeCreate,
  beforeUpdate,
  beforeDestroy,
  afterDestroy,
  afterRestore,
} from './hook'

Sequelize.useCLS(namespace)

const sequelize = new Sequelize({
  ...dbConfig,
  hooks: {
    beforeBulkCreate,
    beforeCreate,
    beforeUpdate,
    beforeDestroy,
    afterDestroy,
    afterRestore,
  },
})

export const models = initModels(sequelize)

export default sequelize

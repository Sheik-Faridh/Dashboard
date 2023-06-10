import { Sequelize } from 'sequelize'
import bcrypt from 'bcrypt'
import { User, initModels } from '@/models/init-models'
import config from '@/config'

const { SALT_ROUND } = config

const encryptPassword = async (user: User) => {
  if (user.changed('password')) {
    const hashedPassword = await bcrypt.hash(user.password, SALT_ROUND)
    user.password = hashedPassword
  }
}

export const bindHooksToModels = (db: Sequelize) => {
  const models = initModels(db)
  models.User.addHook('beforeCreate', 'bcryptBeforeCreate', encryptPassword)
  models.User.addHook('beforeUpdate', 'bcryptBeforeUpdate', encryptPassword)
}

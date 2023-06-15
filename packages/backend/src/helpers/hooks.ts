import bcrypt from 'bcrypt'
import { models } from '@/database'
import { User } from '@/models/init-models'
import config from '@/config'

const { SALT_ROUND } = config

const encryptPassword = async (user: User) => {
  if (user.changed('password')) {
    const hashedPassword = await bcrypt.hash(user.password, SALT_ROUND)
    user.password = hashedPassword
  }
}

export const bindHooksToModels = () => {
  models.User.addHook('beforeCreate', 'bcryptBeforeCreate', encryptPassword)
  models.User.addHook('beforeUpdate', 'bcryptBeforeUpdate', encryptPassword)
}

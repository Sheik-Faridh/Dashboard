import { models } from '@/database'
import { User, UserCreationAttributes } from '@/models/user'
import config from '@/config'
import { getRandomBytes } from '@/helpers/utils'

const { COOKIE_MAX_AGE } = config

export const createUser = async ({
  name,
  email,
  password,
  userType,
}: Pick<
  UserCreationAttributes,
  'name' | 'email' | 'password' | 'userType'
>): Promise<User> => {
  const activationToken = await getRandomBytes()
  const tokenExpiresOn = new Date(Date.now() + COOKIE_MAX_AGE * 1000)
  return await models.User.create({
    name,
    email,
    password,
    activationToken,
    tokenExpiresOn,
    userType,
  })
}

export const findUserByEmail = (email: string, raw = true) =>
  models.User.findOne({ where: { email }, raw })

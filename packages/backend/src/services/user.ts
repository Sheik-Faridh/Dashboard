import { models } from '@/database'
import { User, UserCreationAttributes } from '@/models/user'
import config from '@/config'
import { getRandomBytes } from '@/helpers/utils'

const { COOKIE_MAX_AGE } = config

export const createUser = async ({
  name,
  email,
  password,
}: Pick<
  UserCreationAttributes,
  'name' | 'email' | 'password'
>): Promise<User> => {
  const activationToken = await getRandomBytes()
  const tokenExpiresOn = new Date(Date.now() + COOKIE_MAX_AGE * 1000)
  return await models.User.create({
    name,
    email,
    password,
    activationToken,
    tokenExpiresOn,
  })
}

export const findUserByEmail = (email: string, raw = true) =>
  models.User.findOne({ where: { email }, raw })

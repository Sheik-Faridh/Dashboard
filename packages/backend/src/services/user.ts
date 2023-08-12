import { FindOptions, Op } from 'sequelize'
import { models } from '@/database'
import { User, UserAttributes, UserCreationAttributes } from '@/models/user'
import config from '@/config'
import { getRandomBytes } from '@/helpers/utils'
import { API_CONSTANTS } from '@/constants/app'
import { USER_FIELDS_TO_BE_INCLUDED } from '@/constants/user'
import { formatUserData } from '@/helpers/format'

const { COOKIE_MAX_AGE } = config

export const getUserPayload = async ({
  name,
  email,
  password,
  userType,
  active = 0,
}: Pick<
  UserCreationAttributes,
  'name' | 'email' | 'password' | 'userType' | 'active'
>) => {
  const activationToken = await getRandomBytes()
  const tokenExpiresOn = new Date(Date.now() + COOKIE_MAX_AGE * 1000)
  return {
    name,
    email,
    password,
    activationToken,
    tokenExpiresOn,
    userType,
    active,
  }
}

export const createUser = async ({
  name,
  email,
  password,
  userType,
}: Pick<
  UserCreationAttributes,
  'name' | 'email' | 'password' | 'userType'
>): Promise<User> => {
  const payload = await getUserPayload({ name, email, password, userType })
  return await models.User.create(payload)
}

export const findUserByEmail = (email: string, raw = true) =>
  models.User.findOne({ where: { email }, raw })

export const findUserById = (id: number, raw = true) =>
  models.User.findByPk(id, { raw })

export const getPaginatedUsers = async (
  limit: number,
  cursor: string | null,
): Promise<{
  data: Partial<ReturnType<typeof formatUserData>>[]
  nextCursor: string | null
}> => {
  const options: FindOptions<UserAttributes> = {
    attributes: {
      include: USER_FIELDS_TO_BE_INCLUDED,
    },
    limit: limit || API_CONSTANTS.LIMIT,
    order: [['createdAt', 'DESC']], // Order by createdAt in descending order
    raw: true,
  }

  if (cursor) {
    options.where = {
      createdAt: {
        [Op.lt]: cursor, // Use less than operator for cursor-based pagination
      },
    }
  }

  const users = await models.User.findAll(options)
  const nextCursor = users.length ? `${users[users.length - 1].id}` : null

  return { data: users.map((user) => formatUserData(user)), nextCursor }
}

import { FindOptions, Op } from 'sequelize'
import { models } from '@/database'
import { API_CONSTANTS, EXCLUDE_ATTRIBUTES } from '@/constants/app'
import { RoleCreationAttributes } from '@/models/role'

export const findRoleById = (id: number, raw = true) =>
  models.Role.findByPk(id, { raw })

export const getPaginatedRoles = async (
  limit: number,
  cursor: string | null,
): Promise<{
  data: Partial<RoleCreationAttributes>[]
  nextCursor: string | null
}> => {
  const options: FindOptions = {
    attributes: {
      exclude: EXCLUDE_ATTRIBUTES,
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

  const roles = await models.Role.findAll(options)
  const nextCursor = roles.length ? `${roles[roles.length - 1].id}` : null

  return { data: roles, nextCursor }
}

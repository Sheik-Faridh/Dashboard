import { FindOptions, Op } from 'sequelize'
import { models } from '@/database'
import { API_CONSTANTS, EXCLUDE_ATTRIBUTES } from '@/constants/app'
import { DepartmentCreationAttributes } from '@/models/department'

export const findDepartmentById = (id: number, raw = true) =>
  models.Department.findByPk(id, { raw })

export const getPaginatedDepartments = async (
  limit: number,
  cursor: string | null,
): Promise<{
  data: Partial<DepartmentCreationAttributes>[]
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

  const departments = await models.Department.findAll(options)
  const nextCursor = departments.length
    ? `${departments[departments.length - 1].id}`
    : null

  return { data: departments, nextCursor }
}

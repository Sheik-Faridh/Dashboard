import { FindOptions, Op } from 'sequelize'
import { models } from '@/database'
import { API_CONSTANTS, EXCLUDE_ATTRIBUTES } from '@/constants/app'
import { DesignationCreationAttributes } from '@/models/designation'

export const findDesignationById = (id: number, raw = true) =>
  models.Designation.findByPk(id, { raw })

export const getPaginatedDesignations = async (
  limit: number,
  cursor: string | null,
): Promise<{
  data: Partial<DesignationCreationAttributes>[]
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

  const designations = await models.Designation.findAll(options)
  const nextCursor = designations.length
    ? `${designations[designations.length - 1].id}`
    : null

  return { data: designations, nextCursor }
}

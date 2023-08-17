import { FindOptions, Op } from 'sequelize'
import { models } from '@/database'
import { API_CONSTANTS, EXCLUDE_ATTRIBUTES } from '@/constants/app'
import { ClassCreationAttributes } from '@/models/class'

export const findClassByName = (name: string, raw = true) =>
  models.Class.findOne({ where: { name }, raw })

export const findClassById = (id: number, raw = true) =>
  models.Class.findByPk(id, { raw })

export const getPaginatedClasses = async (
  limit: number,
  cursor: string | null,
): Promise<{
  data: Partial<ClassCreationAttributes>[]
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

  const classes = await models.Class.findAll(options)
  const nextCursor = classes.length ? `${classes[classes.length - 1].id}` : null

  return { data: classes, nextCursor }
}

import { FindOptions, Op } from 'sequelize'
import { models } from '@/database'
import { API_CONSTANTS, EXCLUDE_ATTRIBUTES } from '@/constants/app'
import { FacultyCreationAttributes } from '@/models/faculty'

export const findFacultyById = (id: number, raw = true) =>
  models.Faculty.findByPk(id, { raw })

export const getPaginatedFaculties = async (
  limit: number,
  cursor: string | null,
): Promise<{
  data: Partial<FacultyCreationAttributes>[]
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

  const faculties = await models.Faculty.findAll(options)
  const nextCursor = faculties.length
    ? `${faculties[faculties.length - 1].id}`
    : null

  return { data: faculties, nextCursor }
}

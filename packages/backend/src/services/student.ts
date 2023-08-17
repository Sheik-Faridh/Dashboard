import { FindOptions, Op } from 'sequelize'
import { models } from '@/database'
import { API_CONSTANTS, EXCLUDE_ATTRIBUTES } from '@/constants/app'
import { StudentCreationAttributes } from '@/models/student'

export const findStudentById = (id: number, raw = true) =>
  models.Student.findByPk(id, { raw })

export const getPaginatedStudents = async (
  limit: number,
  cursor: string | null,
): Promise<{
  data: Partial<StudentCreationAttributes>[]
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

  const students = await models.Student.findAll(options)
  const nextCursor = students.length
    ? `${students[students.length - 1].id}`
    : null

  return { data: students, nextCursor }
}

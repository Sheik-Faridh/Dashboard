import { FindOptions, Op } from 'sequelize'
import { models } from '@/database'
import { API_CONSTANTS, EXCLUDE_ATTRIBUTES } from '@/constants/app'
import { SectionCreationAttributes } from '@/models/section'

export const findSectionById = (id: number, raw = true) =>
  models.Section.findByPk(id, { raw })

export const getPaginatedSections = async (
  limit: number,
  cursor: string | null,
): Promise<{
  data: Partial<SectionCreationAttributes>[]
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

  const sections = await models.Section.findAll(options)
  const nextCursor = sections.length
    ? `${sections[sections.length - 1].id}`
    : null

  return { data: sections, nextCursor }
}

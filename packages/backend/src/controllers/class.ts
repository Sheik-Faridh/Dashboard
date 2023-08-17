import { NextFunction, Request, Response } from 'express'
import { asyncHandler, isNumeric } from '@/helpers/utils'
import { HttpStatusCode } from '@/types/http_codes'
import { BadRequest, NotFoundRequest } from '@/helpers/error'
import {
  findClassById,
  findClassByName,
  getPaginatedClasses,
} from '@/services/class'

export const getAllClasses = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { limit, cursor } = req.query as { limit: string; cursor: string }

    const { nextCursor, data } = await getPaginatedClasses(+limit, cursor)

    if (nextCursor) res.setHeader('cursor', nextCursor)

    return res.status(HttpStatusCode.Ok).json({ data })
  },
)

export const getClassByIdOrName = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id_or_name } = req.params

    if (!id_or_name) throw new BadRequest('Invalid Class Params')

    const classData = isNumeric(id_or_name)
      ? await findClassById(+id_or_name)
      : await findClassByName(id_or_name)

    if (!classData) throw new NotFoundRequest('Class not found')

    return res.status(HttpStatusCode.Ok).json({ data: classData })
  },
)

import { NextFunction, Request, Response } from 'express'
import { asyncHandler } from '@/helpers/utils'
import { HttpStatusCode } from '@/types/http_codes'
import { BadRequest, NotFoundRequest } from '@/helpers/error'
import { findFacultyById, getPaginatedFaculties } from '@/services/faculty'

export const getAllFaculties = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { limit, cursor } = req.query as { limit: string; cursor: string }

    const { nextCursor, data } = await getPaginatedFaculties(+limit, cursor)

    if (nextCursor) res.setHeader('cursor', nextCursor)

    return res.status(HttpStatusCode.Ok).json({ data })
  },
)

export const getFacultyById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    if (!id) throw new BadRequest('Invalid Faculty ID')

    const faculty = await findFacultyById(+id)

    if (!faculty) throw new NotFoundRequest('Faculty not found')

    return res.status(HttpStatusCode.Ok).json({ data: faculty })
  },
)

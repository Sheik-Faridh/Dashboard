import { NextFunction, Request, Response } from 'express'
import { asyncHandler } from '@/helpers/utils'
import { HttpStatusCode } from '@/types/http_codes'
import { BadRequest, NotFoundRequest } from '@/helpers/error'
import { findSectionById, getPaginatedSections } from '@/services/section'

export const getAllSections = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { limit, cursor } = req.query as { limit: string; cursor: string }

    const { nextCursor, data } = await getPaginatedSections(+limit, cursor)

    if (nextCursor) res.setHeader('cursor', nextCursor)

    return res.status(HttpStatusCode.Ok).json({ data })
  },
)

export const getSectionById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    if (!id) throw new BadRequest('Invalid Section ID')

    const section = await findSectionById(+id)

    if (!section) throw new NotFoundRequest('Section not found')

    return res.status(HttpStatusCode.Ok).json({ data: section })
  },
)

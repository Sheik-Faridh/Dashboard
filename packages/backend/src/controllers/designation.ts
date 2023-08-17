import { NextFunction, Request, Response } from 'express'
import { asyncHandler } from '@/helpers/utils'
import { HttpStatusCode } from '@/types/http_codes'
import { BadRequest, NotFoundRequest } from '@/helpers/error'
import {
  findDesignationById,
  getPaginatedDesignations,
} from '@/services/designation'

export const getAllDesignations = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { limit, cursor } = req.query as { limit: string; cursor: string }

    const { nextCursor, data } = await getPaginatedDesignations(+limit, cursor)

    if (nextCursor) res.setHeader('cursor', nextCursor)

    return res.status(HttpStatusCode.Ok).json({ data })
  },
)

export const getDesignationById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    if (!id) throw new BadRequest('Invalid Designation ID')

    const designation = await findDesignationById(+id)

    if (!designation) throw new NotFoundRequest('Designation not found')

    return res.status(HttpStatusCode.Ok).json({ data: designation })
  },
)

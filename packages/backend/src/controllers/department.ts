import { NextFunction, Request, Response } from 'express'
import { asyncHandler } from '@/helpers/utils'
import { HttpStatusCode } from '@/types/http_codes'
import { BadRequest, NotFoundRequest } from '@/helpers/error'
import {
  findDepartmentById,
  getPaginatedDepartments,
} from '@/services/department'

export const getAllDepartments = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { limit, cursor } = req.query as { limit: string; cursor: string }

    const { nextCursor, data } = await getPaginatedDepartments(+limit, cursor)

    if (nextCursor) res.setHeader('cursor', nextCursor)

    return res.status(HttpStatusCode.Ok).json({ data })
  },
)

export const getDepartmentById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    if (!id) throw new BadRequest('Invalid Department ID')

    const department = await findDepartmentById(+id)

    if (!department) throw new NotFoundRequest('Department not found')

    return res.status(HttpStatusCode.Ok).json({ data: department })
  },
)

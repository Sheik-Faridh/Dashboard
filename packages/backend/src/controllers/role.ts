import { NextFunction, Request, Response } from 'express'
import { asyncHandler } from '@/helpers/utils'
import { HttpStatusCode } from '@/types/http_codes'
import { BadRequest, NotFoundRequest } from '@/helpers/error'
import { findRoleById, getPaginatedRoles } from '@/services/role'

export const getAllRoles = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { limit, cursor } = req.query as { limit: string; cursor: string }

    const { nextCursor, data } = await getPaginatedRoles(+limit, cursor)

    if (nextCursor) res.setHeader('cursor', nextCursor)

    return res.status(HttpStatusCode.Ok).json({ data })
  },
)

export const getRoleById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    if (!id) throw new BadRequest('Invalid Role ID')

    const role = await findRoleById(+id)

    if (!role) throw new NotFoundRequest('Role not found')

    return res.status(HttpStatusCode.Ok).json({ data: role })
  },
)

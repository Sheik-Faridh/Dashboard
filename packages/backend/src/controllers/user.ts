import { NextFunction, Request, Response } from 'express'
import { asyncHandler } from '@/helpers/utils'
import { HttpStatusCode } from '@/types/http_codes'
import { findUserById, getPaginatedUsers } from '@/services/user'

export const getAllUsers = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { limit, cursor } = req.query as { limit: string; cursor: string }

    const { nextCursor, data } = await getPaginatedUsers(+limit, cursor)

    if (nextCursor) res.setHeader('cursor', nextCursor)

    return res.status(HttpStatusCode.Ok).json({ data })
  },
)

export const getUserById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    const user = await findUserById(+id)

    return res.status(HttpStatusCode.Ok).json({ data: user })
  },
)

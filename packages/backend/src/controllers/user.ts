import { NextFunction, Request, Response } from 'express'
import { asyncHandler } from '@/helpers/utils'
import { HttpStatusCode } from '@/types/http_codes'
import { findUserById, getPaginatedUsers } from '@/services/user'
import { BadRequest, NotFoundRequest } from '@/helpers/error'
import { formatUserData } from '@/helpers/format'

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

    if (!id) throw new BadRequest('Invalid User ID')

    const user = await findUserById(+id)

    if (!user) throw new NotFoundRequest('User not found')

    return res.status(HttpStatusCode.Ok).json({ data: formatUserData(user) })
  },
)

export const getLoggedInUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    return res.status(HttpStatusCode.Ok).json({ data: req.user })
  },
)

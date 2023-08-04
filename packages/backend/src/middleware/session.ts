import { setUserIdToSession } from '@/database/cls'
import { Request, Response, NextFunction } from 'express'

export const setUserSession = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.user?.id) setUserIdToSession(req.user.id)
  next()
}

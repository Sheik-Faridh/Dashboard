import namespace, { setUserIdToSession } from '@/database/cls'
import { Request, Response, NextFunction } from 'express'

export const setUserSession = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  namespace.run(() => {
    if (req.user?.id) setUserIdToSession(req.user?.id)
    next()
  })
}

import { Request, Response, NextFunction } from 'express'
import { UnAuthorizedRequest } from '@/helpers/error'

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.url.includes('/auth/')) return next()

  if (req.user?.id) return next()

  // Create a new error with a custom message
  const error = new UnAuthorizedRequest()
  // Pass the error to the error-handling middleware
  next(error)
}

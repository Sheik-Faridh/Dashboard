import { Request, Response, NextFunction } from 'express'
import * as http from 'http'
import logger from './logger'

type CallbackFn = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>

export const asyncHandler =
  (fn: CallbackFn) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }

export const shutdown = (server: http.Server, code: number) => {
  return (err: Error | Promise<unknown>) => {
    if (err && err instanceof Error) logger.error(err)
    logger.warn(`Received shutdown signal, killing server.`)
    server.close(() => {
      logger.warn('Server is now dead - hope this is what you wanted.')
      process.exit(code)
    })
  }
}

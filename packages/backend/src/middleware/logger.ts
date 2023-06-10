import { NextFunction, Request, Response } from 'express'
import logger from '@/helpers/logger'

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const start = Date.now()

  res.on('finish', () => {
    const duration = Date.now() - start

    const logEntry = {
      method: req.method,
      url: req.originalUrl,
      body: req.body,
      query: req.query,
      params: req.params,
      duration: `${duration}ms`,
    }

    logger.info(JSON.stringify(logEntry))
  })

  next()
}

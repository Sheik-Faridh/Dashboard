import { Request, Response, NextFunction } from 'express'
import * as http from 'http'
import { randomBytes } from 'crypto'
import logger from './logger'
import config from '@/config'

const { BYTESLENGTH } = config

type CallbackFn = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<Response> | Promise<void> | void

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

export const getRandomBytes = (): Promise<string> =>
  new Promise((resolve, reject) =>
    randomBytes(BYTESLENGTH, (err, buffer) => {
      if (err) reject(err)
      resolve(buffer.toString('hex'))
    }),
  )

export const isNumeric = (value: string) => /^-?\d+$/.test(value)

import { NextFunction, Request, Response } from 'express'
import winston, { format } from 'winston'
import path from 'path'
import fs from 'fs'
import DailyRotateFile from 'winston-daily-rotate-file'

const logDirName = 'logs'
const logsDir = path.join(__dirname, logDirName)

// Create logs directory if it doesn't exist
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir)
}

const logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.printf(
      ({ level, message, timestamp }) => `${timestamp} ${level}: ${message}`,
    ),
  ),
})

if (process.env.NODE_ENV === 'development') {
  logger.add(
    new winston.transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
  )
} else {
  // Define file transport for error logs
  const errorTransport = new DailyRotateFile({
    dirname: path.join(logDirName, 'error'),
    filename: 'error-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    level: 'error',
  })

  logger.add(errorTransport)

  const combinedTransport = new DailyRotateFile({
    dirname: path.join(logDirName, 'combined'),
    filename: 'combined-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
  })

  logger.add(combinedTransport)
}

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

export default logger

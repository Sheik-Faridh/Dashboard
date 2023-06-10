import winston, { format } from 'winston'
import path from 'path'
import fs from 'fs'
import DailyRotateFile from 'winston-daily-rotate-file'
import config from '@/config'

const { NODE_ENV } = config

const logDirName = 'logs'

// Create logs directory if it doesn't exist
if (!fs.existsSync(logDirName)) {
  fs.mkdirSync(logDirName)
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

if (NODE_ENV === 'production') {
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
} else {
  logger.add(
    new winston.transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
  )
}

export default logger

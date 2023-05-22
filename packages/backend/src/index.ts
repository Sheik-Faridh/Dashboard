import express from 'express'
import config from '@/config'
import logger, { requestLogger } from '@/logger'
import { errorHandler, notFoundHandler } from '@/error'

const { PORT } = config

const app = express()

app.use(requestLogger)

app.use(notFoundHandler)

app.use(errorHandler)

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`)
})

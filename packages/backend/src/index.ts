import express from 'express'
import config from '@/config'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'
import apiRouter from '@/routes'
import logger, { requestLogger } from '@/logger'
import { errorHandler, notFoundHandler } from '@/error'

const { PORT } = config

const app = express()

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

app.use(cookieParser())
app.use(cors())
app.use(helmet())
app.use(compression())

app.use('/api/v1', apiRouter)

app.use(requestLogger)

app.use(notFoundHandler)

app.use(errorHandler)

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`)
})

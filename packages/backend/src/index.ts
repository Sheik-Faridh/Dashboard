import app from '@/app'
import bootstrap from '@/bootstrap'
import config from '@/config'
import logger from '@/helpers/logger'
import { shutdown } from '@/helpers/utils'

const { PORT } = config

bootstrap().then(() => {
  const server = app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`)
  })

  process.on('uncaughtException', shutdown(server, 1))
  process.on('unhandledRejection', shutdown(server, 1))
  process.on('SIGTERM', shutdown(server, 0))
  process.on('SIGINT', shutdown(server, 0))
})

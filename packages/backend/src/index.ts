import app from '@/app'
import bootstrap from '@/bootstrap'
import config from '@/config'
import logger from '@/helpers/logger'

const { PORT } = config

bootstrap().then(() => {
  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`)
  })
})

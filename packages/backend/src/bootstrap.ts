import { bindHooksToModels } from '@/helpers/hooks'
import db from '@/database'
import logger from '@/helpers/logger'
import { verifyTransporter } from '@/helpers/mailer'

const bootstrap = async () => {
  try {
    await db.authenticate()
    bindHooksToModels()
    await verifyTransporter()
    logger.info('Database Connection has been established successfully.')
  } catch (error) {
    logger.error(error)
    process.exit(0)
  }
}

export default bootstrap

import { bindHooksToModels } from '@/helpers/hooks'
import db from '@/database'
import logger from '@/helpers/logger'

const bootstrap = async () => {
  try {
    await db.authenticate()
    bindHooksToModels()
    logger.info('Database Connection has been established successfully.')
  } catch (error) {
    logger.error(error)
    process.exit(0)
  }
}

export default bootstrap

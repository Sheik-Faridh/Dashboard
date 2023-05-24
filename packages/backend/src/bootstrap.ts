import { bindHooksToModels } from '@/hooks'
import db from '@/db'
import logger from '@/logger'

const bootstrap = async () => {
  try {
    await db.authenticate()
    bindHooksToModels(db)
    logger.info('Database Connection has been established successfully.')
  } catch (error) {
    logger.error(error)
    process.exit(0)
  }
}

export default bootstrap

import { Sequelize } from 'sequelize'
import { createNamespace } from 'cls-hooked'
import { Umzug, SequelizeStorage } from 'umzug'
import sequelize from '@/db'
import logger from '@/utils/logger'

const nameSpace = createNamespace('migration')

const migration = new Umzug({
  migrations: {
    glob: 'src/database/migrations/*.js',
    resolve: ({ name, path, context }) => {
      // Adjust the migration from the new signature to the v2 signature, making easier to upgrade to v3
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const migration = require(path ?? '')
      return {
        name,
        up: async () => migration.up(context, Sequelize),
        down: async () => migration.down(context, Sequelize),
      }
    },
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: logger,
})

nameSpace.run(async () => {
  try {
    await sequelize.authenticate()
    logger.info('Authenticated successfully')
    await migration.up()
    logger.info('Migration completed successfully')
  } catch (error) {
    logger.error('Migration Failed ' + error)
  }
})

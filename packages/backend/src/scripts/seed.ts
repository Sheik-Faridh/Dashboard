import { Sequelize } from 'sequelize'
import { createNamespace } from 'cls-hooked'
import { Umzug, SequelizeStorage } from 'umzug'
import sequelize from '@/database'
import logger from '@/helpers/logger'

const nameSpace = createNamespace('seeds')

const seed = new Umzug({
  migrations: {
    glob: 'src/database/seeders/*.js',
    resolve: ({ name, path, context }) => {
      // Adjust the seeders from the new signature to the v2 signature, making easier to upgrade to v3
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const seeder = require(path ?? '')
      return {
        name,
        up: async () => seeder.up(context, Sequelize),
        down: async () => seeder.down(context, Sequelize),
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
    await seed.down({ to: 0 })
    await seed.up()
    logger.info('Seeds completed successfully')
  } catch (error) {
    logger.error('Seeds Failed ' + error)
  }
})

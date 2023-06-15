import { createNamespace } from 'cls-hooked'
import SequelizeAuto, { AutoOptions } from 'sequelize-auto'
import path from 'path'
import sequelize from '@/database'
import logger from '@/helpers/logger'

const nameSpace = createNamespace('migration')

nameSpace.run(async () => {
  try {
    const options: AutoOptions = {
      caseFile: 'l',
      caseModel: 'p',
      caseProp: 'c',
      singularize: true,
      directory: path.resolve('src/models'),
      useDefine: true,
      lang: 'ts',
    }
    const auto = new SequelizeAuto(sequelize, '', '', options)
    await auto.run()
    logger.info('Models generated successfully')
  } catch (error) {
    logger.error('Failed to generate the models ' + error)
  }
})

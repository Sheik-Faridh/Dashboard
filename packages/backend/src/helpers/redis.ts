import { createClient } from 'redis'
import config from '@/config'
import logger from '@/helpers/logger'

const { REDIS_URL } = config

const redisClient = createClient({
  url: REDIS_URL,
})

;(async () => {
  await redisClient.connect()

  redisClient.on('error', function (err) {
    logger.error('Could not establish a connection with redis. ' + err)
    process.exit(0)
  })

  redisClient.on('connect', function () {
    console.info('Connected to redis successfully')
  })
})()

export default redisClient

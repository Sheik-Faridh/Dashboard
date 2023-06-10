import express from 'express'
import config from '@/config'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import compression from 'compression'
import session from 'express-session'
import { createClient } from 'redis'
import helmet from 'helmet'
import RedisStore from 'connect-redis'
import apiRouter from '@/routes'
import { requestLogger } from '@/middleware/logger'
import { errorHandler, notFoundHandler } from '@/middleware/error'
import passport from '@/config/passport'

const { REDIS_URL, SESSION_SECRET, COOKIE_MAX_AGE, NODE_ENV } = config

const app = express()

const redisClient = createClient({
  url: REDIS_URL,
})

const redisStore = new RedisStore({
  client: redisClient,
})

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

app.use(cookieParser())
app.use(cors())
app.use(helmet())
app.use(compression())

app.use(
  session({
    store: redisStore,
    resave: false, // required: force lightweight session keep alive (touch)
    saveUninitialized: false, // recommended: only save session when data exists
    secret: SESSION_SECRET,
    cookie: {
      maxAge: COOKIE_MAX_AGE,
      httpOnly: true,
      secure: NODE_ENV === 'production',
    },
  }),
)

app.use(passport.initialize())
app.use(passport.session())

app.use(requestLogger)

app.use('/api/v1', apiRouter)

app.use(notFoundHandler)

app.use(errorHandler)

export default app

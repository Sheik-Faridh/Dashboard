import express from 'express'
import * as AuthController from '@/controllers/auth'
import { methodNotSupportedHandler } from '@/middleware/error'
import { validate } from '@/middleware/validator'
import { login, signup } from '@/helpers/validation'
import config from '@/config'
import passport from '@/config/passport'

const router = express.Router()

const { CLIENT_HOST } = config

router
  .post('/login', validate(login), AuthController.login)
  .post('/signup', validate(signup), AuthController.signup)
  .get(
    '/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }),
  )
  .get(
    '/google/callback',
    passport.authenticate('google', {
      failureRedirect: `${CLIENT_HOST}/signup`,
      successRedirect: `${CLIENT_HOST}/`,
    }),
  )
  .post('/logout', AuthController.logout)
  .all('*', methodNotSupportedHandler)

export default router

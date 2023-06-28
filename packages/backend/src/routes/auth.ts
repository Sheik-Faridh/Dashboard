import express from 'express'
import {
  loginController,
  logoutController,
  signupController,
} from '@/controllers/auth'
import { methodNotSupportedHandler } from '@/middleware/error'
import { validate } from '@/middleware/validator'
import { login, signup } from '@/helpers/validation'
import passport from '@/config/passport'

const router = express.Router()

router
  .post('/login', validate(login), loginController)
  .post('/signup', validate(signup), signupController)
  .get(
    '/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }),
  )
  .get(
    '/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/signin',
      successRedirect: '/',
    }),
  )
  .post('/logout', logoutController)
  .all('*', methodNotSupportedHandler)

export default router

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
  .route('/login')
  .post(validate(login), loginController)
  .all(methodNotSupportedHandler)

router
  .route('/signup')
  .post(validate(signup), signupController)
  .all(methodNotSupportedHandler)

router
  .route('/google')
  .get(passport.authenticate('google', { scope: ['profile', 'email'] }))
  .all(methodNotSupportedHandler)

router
  .route('/google/callback')
  .get(
    passport.authenticate('google', {
      failureRedirect: '/signin',
      successRedirect: '/',
    }),
  )
  .all(methodNotSupportedHandler)

router.route('/logout').post(logoutController).all(methodNotSupportedHandler)

export default router

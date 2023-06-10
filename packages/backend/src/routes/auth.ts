import express from 'express'
import { loginController } from '@/controllers/auth'
import { methodNotSupportedHandler } from '@/middleware/error'
import { validate } from '@/middleware/validator'
import { login } from '@/helpers/validation'

const router = express.Router()

router
  .route('/login')
  .post(validate(login), loginController)
  .all(methodNotSupportedHandler)

export default router

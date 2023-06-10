import express from 'express'
import { loginController } from '@/controllers/auth'
import { methodNotSupportedHandler } from '@/utils/error'

const router = express.Router()

router.route('/login').post(loginController).all(methodNotSupportedHandler)

export default router

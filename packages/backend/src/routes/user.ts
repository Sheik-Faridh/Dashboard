import express from 'express'
import { methodNotSupportedHandler } from '@/middleware/error'
import * as UserController from '@/controllers/user'

const router = express.Router()

router
  .get('/', UserController.getAllUsers)
  .get('/id', UserController.getUserById)
  .all('*', methodNotSupportedHandler)

export default router

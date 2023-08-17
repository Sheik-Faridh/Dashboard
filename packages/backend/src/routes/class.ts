import express from 'express'
import { methodNotSupportedHandler } from '@/middleware/error'
import * as ClassController from '@/controllers/class'

const router = express.Router()

router
  .get('/', ClassController.getAllClasses)
  .get('/:id_or_name', ClassController.getClassByIdOrName)
  .all('*', methodNotSupportedHandler)

export default router

import express from 'express'
import { methodNotSupportedHandler } from '@/middleware/error'
import * as FacultyController from '@/controllers/faculty'

const router = express.Router()

router
  .get('/', FacultyController.getAllFaculties)
  .get('/:id', FacultyController.getFacultyById)
  .all('*', methodNotSupportedHandler)

export default router

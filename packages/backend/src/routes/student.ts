import express from 'express'
import { methodNotSupportedHandler } from '@/middleware/error'
import * as StudentController from '@/controllers/student'

const router = express.Router()

router
  .get('/', StudentController.getAllStudents)
  .get('/:id', StudentController.getStudentById)
  .all('*', methodNotSupportedHandler)

export default router

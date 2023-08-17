import express from 'express'
import { methodNotSupportedHandler } from '@/middleware/error'
import * as DepartmentController from '@/controllers/department'

const router = express.Router()

router
  .get('/', DepartmentController.getAllDepartments)
  .get('/:id', DepartmentController.getDepartmentById)
  .all('*', methodNotSupportedHandler)

export default router

import express from 'express'
import { methodNotSupportedHandler } from '@/middleware/error'
import * as DesignationController from '@/controllers/designation'

const router = express.Router()

router
  .get('/', DesignationController.getAllDesignations)
  .get('/:id', DesignationController.getDesignationById)
  .all('*', methodNotSupportedHandler)

export default router

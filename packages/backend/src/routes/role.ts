import express from 'express'
import { methodNotSupportedHandler } from '@/middleware/error'
import * as RoleController from '@/controllers/role'

const router = express.Router()

router
  .get('/', RoleController.getAllRoles)
  .get('/:id', RoleController.getRoleById)
  .all('*', methodNotSupportedHandler)

export default router

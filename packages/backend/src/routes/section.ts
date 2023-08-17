import express from 'express'
import { methodNotSupportedHandler } from '@/middleware/error'
import * as SectionController from '@/controllers/section'

const router = express.Router()

router
  .get('/', SectionController.getAllSections)
  .get('/:id', SectionController.getSectionById)
  .all('*', methodNotSupportedHandler)

export default router

import express from 'express'
import { methodNotSupportedHandler } from '@/middleware/error'

const router = express.Router()

router.route('/users').all(methodNotSupportedHandler)

export default router

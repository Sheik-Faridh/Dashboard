import express from 'express'
import authRouter from './auth'
import userRouter from './user'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/users', userRouter)

export default router

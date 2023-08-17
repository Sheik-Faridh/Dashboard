import express from 'express'
import authRouter from './auth'
import userRouter from './user'
import facultyRouter from './faculty'
import classRouter from './class'
import departmentRouter from './department'
import designationRouter from './department'
import roleRouter from './role'
import sectionRouter from './section'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/faculties', facultyRouter)
router.use('/classes', classRouter)
router.use('/departments', departmentRouter)
router.use('/designations', designationRouter)
router.use('/roles', roleRouter)
router.use('/sections', sectionRouter)

export default router

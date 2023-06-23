import { BadRequest } from '@/helpers/error'
import { formatUserData } from '@/helpers/format'
import { asyncHandler } from '@/helpers/utils'
import { createUser, findUserByEmail } from '@/services/user'
import { HttpStatusCode } from '@/types/http_codes'
import { NextFunction, Request, Response } from 'express'
import passport from 'passport'

export const loginController = asyncHandler(
  (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate(
      'local',
      function callback(err: unknown, user: Express.User) {
        if (err) return next(err)
        if (!user) return next(new BadRequest('User not Found'))
        req.logIn(user, function (err) {
          if (err) next(err)
          res.status(HttpStatusCode.Ok).json({ data: formatUserData(user) })
        })
      },
    )(req, res, next)
  },
)

export const signupController = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body
    const user = await findUserByEmail(email)
    if (user) next(new BadRequest(`Email ${email} already exist`))
    const newUser = await createUser({ name, email, password })
    res.status(HttpStatusCode.Created).json({ data: formatUserData(newUser) })
  },
)

export const logoutController = asyncHandler(
  (req: Request, res: Response, next: NextFunction) => {
    req.logout(function (err) {
      if (err) next(err)
      req.session.destroy(function (e) {
        if (e) next(e)
        res.clearCookie('connect.sid')
        res.status(HttpStatusCode.Ok).json({ message: 'Logout Successfull' })
      })
    })
  },
)

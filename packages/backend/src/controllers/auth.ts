import { NextFunction, Request, Response } from 'express'
import passport from 'passport'
import config from '@/config'
import { createUser, findUserByEmail } from '@/services/user'
import { BadRequest } from '@/helpers/error'
import { formatUserData } from '@/helpers/format'
import { asyncHandler } from '@/helpers/utils'
import { sendMail } from '@/helpers/mailer'
import { HttpStatusCode } from '@/types/http_codes'

const { CLIENT_HOST } = config

export const login = asyncHandler(
  (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate(
      'local',
      function callback(err: unknown, user: Express.User) {
        if (err) return next(err)
        if (!user) return next(new BadRequest('User not Found'))
        req.logIn(user, function (err) {
          if (err) next(err)
          res.status(HttpStatusCode.Ok).json({ data: user })
        })
      },
    )(req, res, next)
  },
)

export const signup = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body
    const user = await findUserByEmail(email)
    if (user) next(new BadRequest(`Email ${email} already exist`))
    const newUser = await createUser({
      name,
      email,
      password,
      userType: 'Student',
    })
    await sendMail({
      templateName: 'verify_account',
      recipient: email,
      subject: 'Account Activation',
      context: {
        username: newUser.name,
        activationLink: `${CLIENT_HOST}/verify/user/${newUser.activationToken}`,
      },
    })
    return res
      .status(HttpStatusCode.Created)
      .json({ data: formatUserData(newUser) })
  },
)

export const logout = asyncHandler(
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

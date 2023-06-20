import { BadRequest } from '@/helpers/error'
import { NextFunction, Request, Response } from 'express'
import passport from 'passport'

export const loginController = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  passport.authenticate(
    'local',
    function callback(err: unknown, user: Express.User) {
      if (err) return next(err)

      if (!user) return next(new BadRequest('User not Found'))

      req.logIn(user, function (err) {
        if (err) next(err)
        res.status(200).json({ message: 'Login Successfull' })
      })
    },
  )(req, res, next)
}

export const oAuthCallbackController = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.user) return next(new BadRequest('User not Found'))

  req.logIn(req.user, function (err) {
    if (err) next(err)
    res.status(200).json({ message: 'Login Successfull' })
  })
}

export const logoutController = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  req.logout(function (err) {
    if (err) next(err)
    req.session.destroy(function (e) {
      if (e) next(e)
      res.clearCookie('connect.sid')
      res.status(200).json({ message: 'Logout Successfull' })
    })
  })
}

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

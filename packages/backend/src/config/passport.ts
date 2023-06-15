import bcrypt from 'bcrypt'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { models } from '@/database'

passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        const user = await models.User.findOne({ where: { email }, raw: true })

        if (!user)
          return done(undefined, false, {
            message: `Email ${email} not found.`,
          })

        const match = await bcrypt.compare(password, user.password)

        if (match) return done(undefined, user)

        return done(undefined, false, {
          message: 'Invalid password.',
        })
      } catch (error) {
        return done(error)
      }
    },
  ),
)

passport.serializeUser((user, cb) => {
  return cb(undefined, user.id)
})

passport.deserializeUser<number>(async (id, done) => {
  try {
    const user = await models.User.findByPk(id)
    if (!user) return done('User not found')
    return done(undefined, user)
  } catch (error) {
    done(error)
  }
})

export default passport

import bcrypt from 'bcrypt'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { models } from '@/database'
import config from '@/config'
import { BadRequest, InternalServerError } from '@/helpers/error'
import { findUserByEmail, findUserById } from '@/services/user'
import { formatUserData } from '@/helpers/format'

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL } = config

passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        const user = await findUserByEmail(email)
        if (!user) return done(new BadRequest(`Email ${email} not found.`))
        const match = await bcrypt.compare(password, user.password)
        if (match) return done(undefined, formatUserData(user))
        return done(new BadRequest('Invalid password.'))
      } catch (error) {
        return done(error)
      }
    },
  ),
)

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const [user] = await models.User.findOrCreate({
          where: {
            password: accessToken,
            name: profile?.name?.givenName,
            email: profile?.emails?.[0]?.value,
          },
        })
        done(null, formatUserData(user))
      } catch (error) {
        return done(new InternalServerError('Internal Server Error'))
      }
    },
  ),
)

passport.serializeUser((user, cb) => {
  return cb(undefined, user.id)
})

passport.deserializeUser<number>(async (id, done) => {
  try {
    const user = await findUserById(id)
    if (!user) return done('User not found')
    return done(undefined, formatUserData(user))
  } catch (error) {
    done(error)
  }
})

export default passport

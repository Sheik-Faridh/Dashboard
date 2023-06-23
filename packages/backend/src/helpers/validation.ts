import { IValidation } from '@/middleware/validator'
import Joi from 'joi'

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .max(16)
    .pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()])/)
    .required(),
})

const signUpSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .max(16)
    .pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()])/)
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
})

const login: Partial<IValidation> = {
  body: loginSchema,
}

const signup: Partial<IValidation> = {
  body: signUpSchema,
}

export { login, signup }

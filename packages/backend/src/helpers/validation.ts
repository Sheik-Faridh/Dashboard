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

const login: Partial<IValidation> = {
  body: loginSchema,
}

export { login }

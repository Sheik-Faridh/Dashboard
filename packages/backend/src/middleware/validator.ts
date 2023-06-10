import Joi, { ValidationErrorItem } from 'joi'
import { Request, Response, NextFunction } from 'express'
import { BadRequest } from '@/helpers/error'

export interface IValidation {
  options: Joi.ValidationOptions
  body: Joi.ObjectSchema
  headers: Joi.ObjectSchema
  query: Joi.ObjectSchema
  cookies: Joi.ObjectSchema
  params: Joi.ObjectSchema
}

const props: Array<keyof Omit<IValidation, 'options'>> = [
  'body',
  'query',
  'headers',
  'params',
  'cookies',
]

export const validate = (settings: Partial<IValidation>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const errors: ValidationErrorItem[] = []
    for (const key of props) {
      if (settings?.[key as keyof IValidation]) {
        const data = req[key as keyof Request]
        const schema = settings[key as keyof IValidation] as Joi.ObjectSchema
        const options = settings?.options ?? {}
        console.log(options, data, schema)
        const result = schema.validate(data, options)
        result.error?.details && errors.push(...result.error.details)
      }
    }

    if (errors.length) return next(new BadRequest(undefined, errors))
    next()
  }
}

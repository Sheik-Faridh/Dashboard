import { NextFunction, Request, Response } from 'express'
import { ValidationErrorItem } from 'joi'
import BaseError, {
  InternalServerError,
  MethodNotSupportedRequest,
  NotFoundRequest,
} from '@/helpers/error'

export const methodNotSupportedHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Create a new error with a custom message
  const error = new MethodNotSupportedRequest('Method Not Supported')
  // Pass the error to the error-handling middleware
  next(error)
}

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Create a new error with a custom message
  const error = new NotFoundRequest('Not Found')
  // Pass the error to the error-handling middleware
  next(error)
}

export const errorHandler = (
  err: BaseError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Handle the error
  if (!err.httpCode) {
    // If the error does not have a status code, default to 500 Internal Server Error
    err = new InternalServerError(err.message)
  }

  const error: { message: string; errors?: ValidationErrorItem[] } = {
    message: err.message,
  }
  if (err.errors) error.errors = err.errors

  // Set the HTTP response status code and send the error message as JSON
  res.status(err.httpCode).json(error)
}

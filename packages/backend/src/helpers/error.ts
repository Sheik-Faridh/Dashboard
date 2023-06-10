import { ValidationErrorItem } from 'joi'
import { HttpStatusCode } from '@/types/http_codes'
import { HttpStatusCodeNames } from '@/constants/http_code'

export default class BaseError extends Error {
  public readonly name: string
  public readonly httpCode: HttpStatusCode
  public readonly errors?: ValidationErrorItem[]

  constructor(
    name: string,
    httpCode: HttpStatusCode,
    description: string,
    errors?: ValidationErrorItem[],
  ) {
    super(description)
    Object.setPrototypeOf(this, new.target.prototype)

    this.name = name
    this.httpCode = httpCode
    this.errors = errors

    Error.captureStackTrace(this)
  }
}

export class BadRequest extends BaseError {
  constructor(description = 'bad request', errors?: ValidationErrorItem[]) {
    super(
      HttpStatusCodeNames[HttpStatusCode.BadRequest],
      HttpStatusCode.BadRequest,
      description,
      errors,
    )
  }
}

export class UnAuthorizedRequest extends BaseError {
  constructor(description = 'Unauthorized', errors?: ValidationErrorItem[]) {
    super(
      HttpStatusCodeNames[HttpStatusCode.Unauthorized],
      HttpStatusCode.Unauthorized,
      description,
      errors,
    )
  }
}

export class ForbiddenRequest extends BaseError {
  constructor(description = 'forbidden', errors?: ValidationErrorItem[]) {
    super(
      HttpStatusCodeNames[HttpStatusCode.Forbidden],
      HttpStatusCode.Forbidden,
      description,
      errors,
    )
  }
}

export class MethodNotSupportedRequest extends BaseError {
  constructor(
    description = 'method not supported',
    errors?: ValidationErrorItem[],
  ) {
    super(
      HttpStatusCodeNames[HttpStatusCode.MethodNotSupported],
      HttpStatusCode.MethodNotSupported,
      description,
      errors,
    )
  }
}

export class NotFoundRequest extends BaseError {
  constructor(description = 'not found', errors?: ValidationErrorItem[]) {
    super(
      HttpStatusCodeNames[HttpStatusCode.NotFound],
      HttpStatusCode.NotFound,
      description,
      errors,
    )
  }
}

export class InternalServerError extends BaseError {
  constructor(description = 'internal server error') {
    super(
      HttpStatusCodeNames[HttpStatusCode.InternalServerError],
      HttpStatusCode.InternalServerError,
      description,
    )
  }
}

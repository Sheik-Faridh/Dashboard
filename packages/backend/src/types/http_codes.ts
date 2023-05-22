export enum HttpStatusCode {
  // Informational
  Continue = 100,
  SwitchingProtocols = 101,
  Processing = 102,

  // Success
  Ok = 200,
  Created = 201,
  Accepted = 202,
  NoContent = 204,

  // Redirection
  MultipleChoices = 300,
  MovedPermanently = 301,
  Found = 302,
  SeeOther = 303,

  // Client Errors
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,

  // Server Errors
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
}

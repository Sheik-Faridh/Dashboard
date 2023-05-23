import { HttpStatusCode } from '@/types/http_codes'

// Status code names mapping
export const HttpStatusCodeNames: Record<HttpStatusCode, string> = {
  // Informational
  [HttpStatusCode.Continue]: 'Continue',
  [HttpStatusCode.SwitchingProtocols]: 'Switching Protocols',
  [HttpStatusCode.Processing]: 'Processing',

  // Success
  [HttpStatusCode.Ok]: 'OK',
  [HttpStatusCode.Created]: 'Created',
  [HttpStatusCode.Accepted]: 'Accepted',
  [HttpStatusCode.NoContent]: 'No Content',

  // Redirection
  [HttpStatusCode.MultipleChoices]: 'Multiple Choices',
  [HttpStatusCode.MovedPermanently]: 'Moved Permanently',
  [HttpStatusCode.Found]: 'Found',
  [HttpStatusCode.SeeOther]: 'See Other',

  // Client Errors
  [HttpStatusCode.BadRequest]: 'Bad Request',
  [HttpStatusCode.Unauthorized]: 'Unauthorized',
  [HttpStatusCode.Forbidden]: 'Forbidden',
  [HttpStatusCode.PaymentRequired]: 'Payment Required',
  [HttpStatusCode.NotFound]: 'Not Found',
  [HttpStatusCode.MethodNotSupported]: 'Method Not Supported',

  // Server Errors
  [HttpStatusCode.InternalServerError]: 'Internal Server Error',
  [HttpStatusCode.NotImplemented]: 'Not Implemented',
  [HttpStatusCode.BadGateway]: 'Bad Gateway',
  [HttpStatusCode.ServiceUnavailable]: 'Service Unavailable',
  [HttpStatusCode.GatewayTimeout]: 'Gateway Timeout',
}

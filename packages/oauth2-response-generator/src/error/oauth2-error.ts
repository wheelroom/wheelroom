export enum HttpStatus {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
}

export enum OAuth2ErrorType {
  AccessDenied = 'access_denied',
  InvalidClient = 'invalid_client',
  InvalidGrant = 'invalid_grant',
  InvalidRequest = 'invalid_request',
  InvalidScope = 'invalid_scope',
  UnauthorizedClient = 'unauthorized_client',
}

class OAuth2Error extends Error {
  constructor(
    public message: string,
    public description: string,
    public status: HttpStatus,
    public type: OAuth2ErrorType
  ) {
    super(message)
    Object.setPrototypeOf(this, OAuth2Error.prototype)
    this.name = this.constructor.name

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor)
    } else {
      this.stack = new Error(message).stack
    }
  }
}

type ErrorDescription = {
  description: string
}

type ErrorDescriptionArg = ErrorDescription & {
  arg: string
}

export const accessDeniedErrorFactory = ({
  description,
}: ErrorDescription): OAuth2Error => {
  const message = `Access denied`
  return new OAuth2Error(
    message,
    description,
    HttpStatus.UNAUTHORIZED,
    OAuth2ErrorType.AccessDenied
  )
}

export const invalidClientErrorFactory = ({
  description,
}: ErrorDescription): OAuth2Error => {
  const message = `Unauthorized client, verification failed`
  return new OAuth2Error(
    message,
    description,
    HttpStatus.UNAUTHORIZED,
    OAuth2ErrorType.InvalidClient
  )
}

export const invalidGrantErrorFactory = ({
  description,
}: ErrorDescription): OAuth2Error => {
  const message = `Invalid grant, supported grants are: authorization_code, client_credentials`
  return new OAuth2Error(
    message,
    description,
    HttpStatus.BAD_REQUEST,
    OAuth2ErrorType.InvalidGrant
  )
}

export const invalidRequestErrorFactory = ({
  arg,
  description,
}: ErrorDescriptionArg): OAuth2Error => {
  const message = `Invalid request, caused by argument: ${arg})`
  return new OAuth2Error(
    message,
    description,
    HttpStatus.BAD_REQUEST,
    OAuth2ErrorType.InvalidRequest
  )
}

export const invalidScopeErrorFactory = ({
  description,
}: ErrorDescription): OAuth2Error => {
  const message = `Invalid scope, a valid scope is required`
  return new OAuth2Error(
    message,
    description,
    HttpStatus.BAD_REQUEST,
    OAuth2ErrorType.InvalidScope
  )
}

export const unauthorizedClientErrorFactory = (
  description: string
): OAuth2Error => {
  const message = `Unauthorized client, verification failed`
  return new OAuth2Error(
    message,
    description,
    HttpStatus.UNAUTHORIZED,
    OAuth2ErrorType.UnauthorizedClient
  )
}

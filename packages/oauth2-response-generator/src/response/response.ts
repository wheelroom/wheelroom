import Express from 'express'
import { CollectionApi } from '../collection/collection-api'
import { UserCollection } from '../collection/user'
import { JwtApi } from '../jwt/jwt-api'
import { authorizeResponse } from './authorize/authorize-response'
import { MaxAge } from './max-age'
import { tokenResponse } from './token/token-response'

export type OAuth2Response = {
  body: Record<string, any>
  url: string
}

export interface Response {
  /** Api methods to serialize to sotrage layer */
  collectionApi: CollectionApi
  /** Endpoint to generate a response for */
  endpoint: 'authorize' | 'token'
  /** API methods to sign and verify JSON Web Tokens */
  jwtApi: JwtApi
  /** Max ages object containing max ages in seconds */
  maxAge: MaxAge
  /** Server request, also passed to storage layer API */
  req: Express.Request
}

export interface AuthorizeResponse extends Response {
  /** Endpoint to generate a response for */
  endpoint: 'authorize'
  /** Current user */
  user: UserCollection
}

export interface TokenResponse extends Response {
  /** Endpoint to generate a response for */
  endpoint: 'token'
}

export const response = async (
  args: AuthorizeResponse | TokenResponse
): Promise<OAuth2Response> => {
  switch (args.endpoint) {
    case 'authorize':
      return await authorizeResponse(args)
    case 'token':
      return await tokenResponse(args)
    default:
      return { body: {}, url: '' }
  }
}

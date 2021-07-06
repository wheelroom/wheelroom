import Express from 'express'
import { CollectionApi } from '../collection/collection-api'
import { JwtApi } from '../jwt/jwt-api'
import { MaxAge } from '../max-age/max-age'

export type ResponseToSend = {
  parameters: Record<string, any>
  redirectUri: string
}

export interface CommonResponseInput {
  /** Added to the aud claim in a signed JWT */
  audience: string
  /** Api methods to serialize to sotrage layer */
  collectionApi: CollectionApi
  /** Added to the iss claim in a signed JWT */
  issuer: string
  /** API methods to sign and verify JSON Web Tokens */
  jwtApi: JwtApi
  /** Max ages object containing max ages in seconds */
  maxAge: MaxAge
  /** Server request, also passed to storage layer API */
  req: Express.Request
}

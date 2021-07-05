import Express from 'express'
import { CollectionApi } from '../collection/collection-api'
import { UserCollection } from '../collection/user'
import { JwtApi } from '../jwt/jwt-api'
import { authorizeResponse } from './authorize/authorize-response'
import { tokenResponse } from './token/token-response'

export type OAuth2Response = {
  body: Record<string, any>
  headers: Record<string, any>
  url: string
}

export interface ResponseUrl {
  collectionApi: CollectionApi
  endpoint: 'authorize' | 'token'
  jwtApi: JwtApi
  req: Express.Request
  user: UserCollection
}

export const responseUrl = async ({
  endpoint,
  collectionApi,
  jwtApi,
  req,
  user,
}: ResponseUrl): Promise<OAuth2Response> => {
  switch (endpoint) {
    case 'authorize':
      return await authorizeResponse({ collectionApi, jwtApi, req, user })
    case 'token':
      return await tokenResponse({ collectionApi, jwtApi, req })
    default:
      return { body: {}, headers: {}, url: '' }
  }
}

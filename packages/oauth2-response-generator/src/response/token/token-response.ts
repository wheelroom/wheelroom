import Express from 'express'
import { CollectionApi } from '../../collection/collection-api'
import { JwtApi } from '../../jwt/jwt-api'
import { OAuth2Response } from '../response'
import { authorizationCodeGrant } from './grants/authorization-code-grant'
import { refreshTokenGrant } from './grants/refresh-token-grant'

export interface TokenResponse {
  collectionApi: CollectionApi
  jwtApi: JwtApi
  req: Express.Request
}

export const tokenResponse = async ({
  collectionApi,
  jwtApi,
  req,
}: TokenResponse): Promise<OAuth2Response> => {
  const urlObj = new URL(req.headers.location || '')
  const grantType = urlObj.searchParams.get('grant_type')

  switch (grantType) {
    case 'authorization_code':
      return authorizationCodeGrant({ collectionApi, jwtApi, req })

    case 'refresh_token':
      return refreshTokenGrant({ collectionApi, jwtApi, req })

    default:
      return { body: {}, url: '' }
  }
}

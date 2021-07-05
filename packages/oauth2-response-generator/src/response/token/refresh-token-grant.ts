import { TokenCollection } from '../../collection/token'
import { requestToClient } from '../../lib/request-to-client'
import { requestToRedirectUri } from '../../lib/request-to-redirect-uri'
import { requestToScopes } from '../../lib/request-to-scopes'
import { invalidRequestErrorFactory } from '../../error/oauth2-error'
import { accessTokenPayload } from '../../jwt/access-token'
import {
  RawRefreshTokenPayload,
  refreshTokenPayload,
} from '../../jwt/refresh-token'
import { OAuth2Response } from '../response'
import { tokenResponseBodyPayload } from './token-response-body'
import { TokenResponse } from './token-response'

export const refreshTokenGrant = async ({
  collectionApi,
  jwtApi,
  req,
}: TokenResponse): Promise<OAuth2Response> => {
  const existingRefreshToken = req.body['refresh_token']
  if (typeof existingRefreshToken !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'refresh_token',
      description: 'Refresh token body parameter is required',
    })
  }

  const existingRefreshTokenPayload = (await jwtApi.parse(
    existingRefreshToken
  )) as RawRefreshTokenPayload

  const knmownRefreshToken = await collectionApi.token.refreshToken.get({
    refreshToken: existingRefreshToken,
    req,
  })

  if (Date.now() > existingRefreshTokenPayload.expire_time * 1000) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'Refresh token has expired',
    })
  }

  if (Date.now() > knmownRefreshToken.refreshTokenExpiresAt.getTime() * 1000) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'Refresh token was revoked',
    })
  }

  const user = await collectionApi.user.get({
    userId: existingRefreshTokenPayload.user_id,
    req,
  })
  const client = await requestToClient({ collectionApi, req })
  const scopes = await requestToScopes({ collectionApi, req })
  const redirectUri = requestToRedirectUri({ req, client })

  if (existingRefreshTokenPayload.client_id !== client.id) {
    throw invalidRequestErrorFactory({
      arg: 'refresh_token',
      description: 'client_id field in refresh_token JWT is invalid',
    })
  }

  const newAccessTokenPayload = accessTokenPayload({
    clientName: client.name,
    expiresAtSeconds: Date.now() / 1000,
    issuedAtSeconds: Date.now() / 1000,
    notBeforeSeconds: Date.now() / 1000,
    jwtId: 'todo',
    scopes: scopes.map((scope) => scope.name).join(' '),
    userEmail: user.email,
    userId: user.id,
  })

  const newRefreshTokenPayload = refreshTokenPayload({
    clientId: client.id,
    expiresAtSeconds: Date.now() / 1000,
    scopes: scopes.map((scope) => scope.name).join(' '),
    userId: user.id,
  })

  const accessToken = await jwtApi.sign(newAccessTokenPayload)
  const refreshToken = await jwtApi.sign(newRefreshTokenPayload)

  const tokenCollection: TokenCollection = {
    accessToken,
    accessTokenExpiresAt: new Date(),
    client,
    refreshToken,
    refreshTokenExpiresAt: new Date(),
    scopes,
    user,
  }

  await collectionApi.token.persist({ token: tokenCollection, req })
  await collectionApi.token.refreshToken.revoke({
    refreshToken: existingRefreshToken,
    req,
  })

  const body = tokenResponseBodyPayload({
    accessToken,
    expiresInSeconds: 0,
    idToken: '',
    refreshToken,
    scopes: scopes.map((scope) => scope.name).join(' '),
  })
  return { body, headers: {}, url: redirectUri }
}

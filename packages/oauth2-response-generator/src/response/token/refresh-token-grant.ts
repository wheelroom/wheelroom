import { TokenCollection } from '../../collection/token'
import { requestToClient } from '../../context/request-to-client'
import { requestToRedirectUri } from '../../context/request-to-redirect-uri'
import { requestToScopes } from '../../context/request-to-scopes'
import { invalidRequestErrorFactory } from '../../error/oauth2-error'
import { accessTokenPayload } from '../../payload/access-token'
import { RawRefreshTokenPayload } from '../../payload/refresh-token'
import { tokenResponseBodyPayload } from '../../payload/token-response-body'
import { OAuth2Response } from '../response'
import { TokenResponse } from './token-response'

export const refreshTokenGrant = async ({
  context,
}: TokenResponse): Promise<OAuth2Response> => {
  const client = await requestToClient({ context })

  const existingRefreshToken = context.req.body['refresh_token']
  if (typeof existingRefreshToken !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'refresh_token',
      description: 'Refresh token body parameter is required',
    })
  }

  const refreshTokenPayload = (await context.jwt.parse(
    existingRefreshToken
  )) as RawRefreshTokenPayload

  if (!refreshTokenPayload.refresh_token_id) {
    throw invalidRequestErrorFactory({
      arg: 'refresh_token',
      description: 'refresh_token_id field in refresh_token JWT is required',
    })
  }

  if (refreshTokenPayload.client_id !== client.id) {
    throw invalidRequestErrorFactory({
      arg: 'refresh_token',
      description: 'client_id field in refresh_token JWT is invalid',
    })
  }

  const knmownRefreshToken = await context.collections.token.refreshToken.get(
    existingRefreshToken
  )

  if (Date.now() > refreshTokenPayload.expire_time * 1000) {
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

  const scopes = await requestToScopes({ context })
  const redirectUri = requestToRedirectUri({ context, client })

  await context.collections.token.refreshToken.revoke(existingRefreshToken)

  const user = await context.collections.user.get(refreshTokenPayload.user_id)

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

  const newRefreshTokenPayload = accessTokenPayload({
    clientName: client.name,
    expiresAtSeconds: Date.now() / 1000,
    issuedAtSeconds: Date.now() / 1000,
    notBeforeSeconds: Date.now() / 1000,
    jwtId: 'todo',
    scopes: scopes.map((scope) => scope.name).join(' '),
    userEmail: user.email,
    userId: user.id,
  })

  const accessToken = await context.jwt.sign(newAccessTokenPayload)
  const refreshToken = await context.jwt.sign(newRefreshTokenPayload)

  const tokenCollection: TokenCollection = {
    accessToken,
    accessTokenExpiresAt: new Date(),
    client,
    refreshToken,
    refreshTokenExpiresAt: new Date(),
    scopes,
    user,
  }

  context.collections.token.persist(tokenCollection)

  const body = tokenResponseBodyPayload({
    accessToken,
    expiresAtSeconds: 0,
    idToken: '',
    refreshToken,
    scopes: scopes.map((scope) => scope.name).join(' '),
  })
  return { body, headers: {}, url: redirectUri }
}

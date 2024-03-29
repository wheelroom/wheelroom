import { requestToClient } from '../../lib/request-to-client'
import { requestToRedirectUri } from '../../lib/request-to-redirect-uri'
import { requestToScopes } from '../../lib/request-to-scopes'
import {
  invalidRequestErrorFactory,
  jwtErrorFactory,
} from '../../error/oauth2-error'
import { RefreshTokenPayload } from '../../jwt/refresh-token'
import { ResponseToSend } from '../../lib/response'
import { tokenResponseParametersFactory } from '../parameters/token-response-parameters-factory'
import { TokenResponse } from '../token-response'

export const refreshTokenGrant = async ({
  audience,
  collectionApi,
  issuer,
  jwtApi,
  maxAge,
  req,
}: TokenResponse): Promise<ResponseToSend> => {
  const existingRefreshToken = req.body['refresh_token']
  if (typeof existingRefreshToken !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'refresh_token',
      description: 'Refresh token body parameter is required',
    })
  }

  const existingRefreshTokenPayload = (await jwtApi.verify({
    jwt: existingRefreshToken,
  })) as RefreshTokenPayload

  if (!existingRefreshTokenPayload) {
    throw jwtErrorFactory({
      description: 'Could not verify refresh token',
    })
  }

  const knmownToken = await collectionApi.token.get({
    refreshToken: existingRefreshToken,
    req,
  })

  if (Date.now() > existingRefreshTokenPayload.expire_time * 1000) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'Refresh token has expired',
    })
  }

  if (Date.now() > knmownToken.refreshTokenExpiresAt.getTime()) {
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

  if (existingRefreshTokenPayload.client_id !== client.id) {
    throw invalidRequestErrorFactory({
      arg: 'refresh_token',
      description: 'client_id field in refresh_token JWT is invalid',
    })
  }

  await collectionApi.token.revoke({
    refreshToken: existingRefreshToken,
    req,
  })
  const scopes = await requestToScopes({ client, req })
  const redirectUri = requestToRedirectUri({ req, client })
  const parameters = await tokenResponseParametersFactory({
    audience,
    client,
    collectionApi,
    grant: 'refresh_token',
    issuer,
    jwtApi,
    maxAge,
    req,
    scopes,
    user,
  })

  return { parameters, redirectUri }
}

import Express from 'express'
import { AuthCodeCollection } from '../../collection/auth-code'
import { ClientCollection } from '../../collection/client'
import { CollectionApi } from '../../collection/collection-api'
import { ScopeCollection } from '../../collection/scope'
import { TokenCollection } from '../../collection/token'
import { UserCollection } from '../../collection/user'
import { jwtErrorFactory } from '../../error/oauth2-error'
import { createAccessTokenPayload } from '../../jwt/access-token'
import { createIdTokenPayload } from '../../jwt/id-token'
import { JwtApi } from '../../jwt/jwt-api'
import { createRefreshTokenPayload } from '../../jwt/refresh-token'
import { MaxAge } from '../../max-age/max-age'
import { tokenResponseParameters } from './token-response-parameters'

export interface TokenResponseParametersFactory {
  /** Added to the aud claim in the tokens */
  audience: string
  /** Client used to add name and id to tokens */
  client: ClientCollection
  /** Api methods to access storage layer */
  collectionApi: CollectionApi
  /** The grant for which the token parameters are created */
  grant: 'authorization_code' | 'refresh_token'
  /** Added to the iss claim in the tokens */
  issuer: string
  /** Api methods used to sign and verify JSON Web Tokens */
  jwtApi: JwtApi
  /** Used to get nonce for authorize_code grant */
  knownAuthCode?: AuthCodeCollection
  /** Max ages object containing max ages in seconds */
  maxAge: MaxAge
  /** The current request, passed to collectionApi (e.g. for user agent handling) */
  req: Express.Request
  /** Current scopes */
  scopes: ScopeCollection[]
  /** Current user */
  user: UserCollection
}

export const tokenResponseParametersFactory = async ({
  audience,
  client,
  collectionApi,
  grant,
  issuer,
  jwtApi,
  knownAuthCode,
  maxAge,
  req,
  scopes,
  user,
}: TokenResponseParametersFactory) => {
  const grantMaxAge =
    grant === 'refresh_token' ? 'refreshTokenGrant' : 'authorizationCodeGrant'

  const newAccessTokenPayload = createAccessTokenPayload({
    audience,
    clientId: client.id,
    expiresAtSeconds:
      Math.ceil(Date.now() / 1000) +
      maxAge.tokenEndpoint[grantMaxAge].accessToken,
    issuedAtSeconds: Math.ceil(Date.now() / 1000),
    issuer,
    notBeforeSeconds: Math.ceil(Date.now() / 1000) - 5,
    scopes: scopes.map((scope) => scope.name).join(' '),
    userEmail: user.email,
    userId: user.id,
  })

  const newIdTokenPayload = createIdTokenPayload({
    clientId: client.id,
    expiresAtSeconds:
      Math.ceil(Date.now() / 1000) +
      maxAge.tokenEndpoint.authorizationCodeGrant.idToken,
    issuedAtSeconds: Math.ceil(Date.now() / 1000),
    issuer,
    nonce: knownAuthCode?.nonce,
    notBeforeSeconds: Math.ceil(Date.now() / 1000) - 5,
    userEmail: user.email,
    userId: user.id,
    userName: 'not implemented',
  })
  const idToken = await jwtApi.sign({ payload: newIdTokenPayload })
  if (typeof idToken !== 'string') {
    throw jwtErrorFactory({ description: 'Error signing id token' })
  }

  const newRefreshTokenPayload = createRefreshTokenPayload({
    clientId: client.id,
    expiresAtSeconds:
      Math.ceil(Date.now() / 1000) +
      maxAge.tokenEndpoint[grantMaxAge].refreshToken,
    scopes: scopes.map((scope) => scope.name).join(' '),
    userId: user.id,
  })

  const accessToken = await jwtApi.sign({ payload: newAccessTokenPayload })
  if (typeof accessToken !== 'string') {
    throw jwtErrorFactory({ description: 'Error signing access token' })
  }

  const refreshToken = await jwtApi.sign({ payload: newRefreshTokenPayload })
  if (typeof refreshToken !== 'string') {
    throw jwtErrorFactory({ description: 'Error signing refresh token' })
  }

  const tokenCollection: TokenCollection = {
    accessToken,
    accessTokenExpiresAt: new Date(
      Date.now() + 1000 * maxAge.tokenEndpoint[grantMaxAge].accessToken
    ),
    client,
    refreshToken,
    refreshTokenExpiresAt: new Date(
      Date.now() + 1000 * maxAge.tokenEndpoint[grantMaxAge].refreshToken
    ),
    scopes,
    user,
  }

  await collectionApi.token.persist({ token: tokenCollection, req })

  const parameters = tokenResponseParameters({
    accessToken,
    expiresInSeconds: maxAge.tokenEndpoint[grantMaxAge].response,
    idToken,
    refreshToken,
    scopes: scopes.map((scope) => scope.name).join(' '),
  })
  return parameters
}

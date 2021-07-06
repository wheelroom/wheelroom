import Express from 'express'
import { AuthCodeCollection } from '../../collection/auth-code'
import { ClientCollection } from '../../collection/client'
import { CollectionApi } from '../../collection/collection-api'
import { ScopeCollection } from '../../collection/scope'
import { TokenCollection } from '../../collection/token'
import { UserCollection } from '../../collection/user'
import { createAccessTokenPayload } from '../../jwt/access-token'
import { createIdTokenPayload } from '../../jwt/id-token'
import { JwtApi } from '../../jwt/jwt-api'
import { createRefreshTokenPayload } from '../../jwt/refresh-token'
import { bodyPayload } from './body-payload'

export interface CreateBody {
  client: ClientCollection
  collectionApi: CollectionApi
  jwtApi: JwtApi
  knownAuthCode?: AuthCodeCollection
  req: Express.Request
  scopes: ScopeCollection[]
  user: UserCollection
}

export const createBody = async ({
  client,
  collectionApi,
  jwtApi,
  knownAuthCode,
  req,
  scopes,
  user,
}: CreateBody) => {
  const newAccessTokenPayload = createAccessTokenPayload({
    clientName: client.name,
    expiresAtSeconds: Date.now() / 1000,
    issuedAtSeconds: Date.now() / 1000,
    notBeforeSeconds: Date.now() / 1000,
    jwtId: 'todo',
    scopes: scopes.map((scope) => scope.name).join(' '),
    userEmail: user.email,
    userId: user.id,
  })

  const newIdTokenPayload = createIdTokenPayload({
    clientId: client.id,
    expiresAtSeconds: Date.now() / 1000,
    issuedAtSeconds: Date.now() / 1000,
    jwtId: 'TODO',
    nonce: knownAuthCode?.nonce || 'none',
    notBeforeSeconds: Date.now() / 1000,
    userEmail: user.email,
    userEmailVerified: true,
    userId: user.id,
    userName: 'not implemented',
  })

  const newRefreshTokenPayload = createRefreshTokenPayload({
    clientId: client.id,
    expiresAtSeconds: Date.now() / 1000,
    scopes: scopes.map((scope) => scope.name).join(' '),
    userId: user.id,
  })

  const accessToken = await jwtApi.sign(newAccessTokenPayload)
  const idToken = await jwtApi.sign(newIdTokenPayload)
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

  const body = bodyPayload({
    accessToken,
    expiresInSeconds: 0,
    idToken,
    refreshToken,
    scopes: scopes.map((scope) => scope.name).join(' '),
  })
  return body
}

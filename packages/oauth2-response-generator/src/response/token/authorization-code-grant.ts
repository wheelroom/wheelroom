import { TokenCollection } from '../../collection/token'
import { requestToClient } from '../../context/request-to-client'
import { requestToRedirectUri } from '../../context/request-to-redirect-uri'
import { requestToScopes } from '../../context/request-to-scopes'
import {
  invalidGrantErrorFactory,
  invalidRequestErrorFactory,
} from '../../error/oauth2-error'
import {
  CodeChallengeMethod,
  verifyCodeChallenge,
} from '../../lib/verify-code-challenge'
import { accessTokenPayload } from '../../payload/access-token'
import { RawCodeTokenPayload } from '../../payload/code-token'
import { tokenResponseBodyPayload } from '../../payload/token-response-body'
import { OAuth2Response } from '../response'
import { TokenResponse } from './token-response'

export const authorizationCodeGrant = async ({
  context,
}: TokenResponse): Promise<OAuth2Response> => {
  const client = await requestToClient({ context })

  const code = context.req.body['code']
  if (typeof code !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'Code body parameter is required',
    })
  }

  const codePayload = (await context.jwt.parse(code)) as RawCodeTokenPayload

  if (typeof codePayload.auth_code_id !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'auth_code field in code JWT is required',
    })
  }
  const knmownAuthCode = await context.collections.authCode.get(
    codePayload.auth_code_id
  )

  if (Date.now() > codePayload.expire_time * 1000) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'Code JWT has expired',
    })
  }

  if (Date.now() > knmownAuthCode.expiresAt.getTime() * 1000) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'Code JWT was revoked',
    })
  }

  if (codePayload.client_id !== client.id) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'client_id field in code JWT is invalid',
    })
  }

  const redirectUri = requestToRedirectUri({ context, client })

  if (codePayload.redirect_uri !== redirectUri) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'redirect_uri field in code JWT is invalid',
    })
  }

  const scopes = await requestToScopes({ context })

  if (knmownAuthCode.codeChallenge !== codePayload.code_challenge) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'code_challenge field in code JWT is invalid',
    })
  }

  const codeVerifier = context.req.body['code_verifier']
  if (typeof code !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'code_verifier',
      description: 'Code verifier body parameter is required',
    })
  }

  const REGEXP_CODE_VERIFIER = /^[A-Za-z0-9-._~]{43,128}$/

  if (!REGEXP_CODE_VERIFIER.test(codeVerifier)) {
    throw invalidRequestErrorFactory({
      arg: 'code_verifier',
      description: 'Code verifier body parameter does not meet RFS-7636',
    })
  }

  const codeChallengeIsValid = verifyCodeChallenge({
    method: codePayload.code_challenge_method as CodeChallengeMethod,
    codeChallenge: codePayload.code_challenge,
    codeVerifier,
  })

  if (!codeChallengeIsValid) {
    throw invalidGrantErrorFactory({
      description: 'Code challende verification failed',
    })
  }

  const user = await context.collections.user.get(codePayload.user_id)

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
  await context.collections.authCode.revoke(codePayload.auth_code_id)
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

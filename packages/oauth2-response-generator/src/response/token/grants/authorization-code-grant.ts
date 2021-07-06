import { requestToClient } from '../../../lib/request-to-client'
import { requestToRedirectUri } from '../../../lib/request-to-redirect-uri'
import { requestToScopes } from '../../../lib/request-to-scopes'
import {
  invalidGrantErrorFactory,
  invalidRequestErrorFactory,
} from '../../../error/oauth2-error'
import {
  CodeChallengeMethod,
  verifyCodeChallenge,
} from '../../../lib/verify-code-challenge'
import { CodeTokenPayload } from '../../../jwt/code-token'
import { OAuth2Response, TokenResponse } from '../../response'
import { createBody } from '../create-body'

export const authorizationCodeGrant = async ({
  audience,
  collectionApi,
  issuer,
  jwtApi,
  maxAge,
  req,
}: TokenResponse): Promise<OAuth2Response> => {
  const code = req.body['code']
  if (typeof code !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'Code body parameter is required',
    })
  }

  const codePayload = (await jwtApi.verify(code)) as CodeTokenPayload

  if (!codePayload) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'JWT verification failed',
    })
  }

  if (typeof codePayload.auth_code_id !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'auth_code field in code JWT is required',
    })
  }
  const knownAuthCode = await collectionApi.authCode.get({
    authCodeId: codePayload.auth_code_id,
    req,
  })

  if (Date.now() > codePayload.expire_time * 1000) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'Code JWT has expired',
    })
  }

  if (Date.now() > knownAuthCode.expiresAt.getTime() * 1000) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'Code JWT was revoked',
    })
  }

  if (knownAuthCode.codeChallenge !== codePayload.code_challenge) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'code_challenge field in code JWT is invalid',
    })
  }

  const codeVerifier = req.body['code_verifier']
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

  const client = await requestToClient({ collectionApi, req })
  const redirectUri = requestToRedirectUri({ client, req })

  if (codePayload.client_id !== client.id) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'client_id field in code JWT is invalid',
    })
  }

  if (codePayload.redirect_uri !== redirectUri) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'redirect_uri field in code JWT is invalid',
    })
  }

  const user = await collectionApi.user.get({
    userId: codePayload.user_id,
    req,
  })
  const scopes = await requestToScopes({ collectionApi, req })
  const body = await createBody({
    audience,
    client,
    collectionApi,
    grant: 'authorization_code',
    issuer,
    jwtApi,
    knownAuthCode,
    maxAge,
    req,
    scopes,
    user,
  })
  await collectionApi.authCode.revoke({ authCodeId: knownAuthCode.id, req })

  return { body, url: redirectUri }
}

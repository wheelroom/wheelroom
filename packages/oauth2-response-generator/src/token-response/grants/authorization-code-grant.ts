import { requestToClient } from '../../lib/request-to-client'
import { requestToRedirectUri } from '../../lib/request-to-redirect-uri'
import {
  invalidGrantErrorFactory,
  invalidRequestErrorFactory,
  jwtErrorFactory,
} from '../../error/oauth2-error'
import {
  CodeChallengeMethod,
  verifyCodeChallenge,
} from '../../lib/verify-code-challenge'
import { CodeTokenPayload } from '../../jwt/code-token'
import { ResponseToSend } from '../../lib/response'
import { tokenResponseParametersFactory } from '../parameters/token-response-parameters-factory'
import { TokenResponse } from '../token-response'
import { requestToScopes } from '../../lib/request-to-scopes'

export const authorizationCodeGrant = async ({
  audience,
  collectionApi,
  issuer,
  jwtApi,
  maxAge,
  req,
}: TokenResponse): Promise<ResponseToSend> => {
  const codeToken = req.body['code']
  if (typeof codeToken !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'Code body parameter is required',
    })
  }

  const codeTokenPayload = (await jwtApi.verify({
    jwt: codeToken,
  })) as CodeTokenPayload

  if (!codeTokenPayload) {
    throw jwtErrorFactory({
      description: 'Could not verify code token',
    })
  }

  if (typeof codeTokenPayload.auth_code_id !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'auth_code_id field in code JWT is required',
    })
  }
  const knownAuthCode = await collectionApi.authCode.get({
    authCodeId: codeTokenPayload.auth_code_id,
    req,
  })

  if (Date.now() > codeTokenPayload.expire_time * 1000) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'Code JWT has expired',
    })
  }

  if (Date.now() > knownAuthCode.expiresAt.getTime()) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'Code JWT was revoked',
    })
  }

  if (knownAuthCode.codeChallenge !== codeTokenPayload.code_challenge) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'code_challenge field in code JWT is invalid',
    })
  }

  const codeVerifier = req.body['code_verifier']
  if (typeof codeToken !== 'string') {
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
    method: codeTokenPayload.code_challenge_method as CodeChallengeMethod,
    codeChallenge: codeTokenPayload.code_challenge,
    codeVerifier,
  })

  if (!codeChallengeIsValid) {
    throw invalidGrantErrorFactory({
      description: 'Code challende verification failed',
    })
  }

  const client = await requestToClient({ collectionApi, req })
  const redirectUri = requestToRedirectUri({ client, req })
  const scopes = await requestToScopes({ client, req })

  if (codeTokenPayload.client_id !== client.id) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'client_id field in code JWT is invalid',
    })
  }

  if (codeTokenPayload.redirect_uri !== redirectUri) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'redirect_uri field in code JWT is invalid',
    })
  }

  if (typeof codeTokenPayload.user_id !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'user_id field in code JWT is required',
    })
  }
  await collectionApi.authCode.revoke({ authCodeId: knownAuthCode.id, req })
  const user = await collectionApi.user.get({
    userId: codeTokenPayload.user_id,
    req,
  })

  const parameters = await tokenResponseParametersFactory({
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

  return { parameters, redirectUri }
}

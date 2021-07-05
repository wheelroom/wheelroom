import { b64utohex } from 'jsrsasign'
import { v4 as uuidv4 } from 'uuid'
import { AuthCodeCollection } from '../collection/auth-code'
import { Context } from '../context/context'
import { requestToClient } from '../context/request-to-client'
import { requestToRedirectUri } from '../context/request-to-redirect-uri'
import { requestToScopes } from '../context/request-to-scopes'
import { invalidRequestErrorFactory } from '../error/oauth2-error'
import { codeTokenPayload } from '../payload/code-token'
export interface AuthorizeResponse {
  context: Context
}

export const authorizeResponse = async ({ context }: AuthorizeResponse) => {
  const responeType = context.req.query['response_type']

  if (responeType !== 'code') {
    throw invalidRequestErrorFactory({
      arg: 'response_type',
      description: 'Response type must be set to code',
    })
  }

  const client = await requestToClient({ context })
  const redirectUri = requestToRedirectUri({ context, client })
  const scopes = await requestToScopes({ context })

  const state = context.req.query['state']
  if (typeof state !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'state',
      description: 'State query parameter is required',
    })
  }

  const nonce = context.req.query['nonce']
  if (typeof nonce !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'nonce',
      description: 'Nonce query parameter is required',
    })
  }

  const codeChallenge = context.req.query['code_challenge']
  if (typeof codeChallenge !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'code_challenge',
      description: 'Code challenge query parameter is required',
    })
  }

  const REGEXP_CODE_CHALLENGE = /^[A-Za-z0-9-._~]{43,128}$/
  if (!REGEXP_CODE_CHALLENGE.test(b64utohex(codeChallenge))) {
    throw invalidRequestErrorFactory({
      arg: 'code_challenge',
      description: 'Code challenge does not meet RFC-7636',
    })
  }

  const codeChallengeMethod = context.req.query['code_challenge_method']
  if (typeof codeChallengeMethod !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'code_challenge_method',
      description: 'Code challenge method query parameter is required',
    })
  }

  const authCode: AuthCodeCollection = {
    client,
    id: uuidv4(),
    codeChallenge,
    codeChallengeMethod,
    expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes
    nonce,
    redirectUri,
    scopes,
    user: context.user,
  }
  await context.collections.authCode.persist(authCode)

  const codePayload = codeTokenPayload({
    authCodeId: authCode.id,
    clientId: client.id,
    codeChallengeMethod,
    codeChallenge,
    expiresAtSeconds: authCode.expiresAt.getTime() / 1000,
    redirectUri,
    scopes: scopes.map((scope) => scope.name),
    userId: context.user.id,
  })

  const code = await context.jwt.sign(codePayload)

  const redirectUrlObj = new URL(redirectUri)
  redirectUrlObj.searchParams.append('code', code)
  redirectUrlObj.searchParams.append('state', state)

  return redirectUrlObj.toString()
}

import { b64utohex } from 'jsrsasign'
import { v4 as uuidv4 } from 'uuid'
import { AuthCodeCollection } from '../../collection/auth-code'
import { requestToClient } from '../../lib/request-to-client'
import { requestToRedirectUri } from '../../lib/request-to-redirect-uri'
import { requestToScopes } from '../../lib/request-to-scopes'
import {
  invalidRequestErrorFactory,
  jwtErrorFactory,
} from '../../error/oauth2-error'
import { createCodeTokenPayload } from '../../jwt/code-token'
import { AuthorizeResponse, OAuth2Response } from '../response'

export const authorizeResponse = async ({
  collectionApi,
  jwtApi,
  maxAge,
  req,
  user,
}: AuthorizeResponse): Promise<OAuth2Response> => {
  const responeType = req.query['response_type']

  if (responeType !== 'code') {
    throw invalidRequestErrorFactory({
      arg: 'response_type',
      description: 'Response type must be set to code',
    })
  }

  const client = await requestToClient({ req, collectionApi })
  const redirectUri = requestToRedirectUri({ req, client })
  const scopes = await requestToScopes({ req, collectionApi })

  const state = req.query['state']
  if (typeof state !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'state',
      description: 'State query parameter is required',
    })
  }

  const nonce = req.query['nonce']
  if (typeof nonce !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'nonce',
      description: 'Nonce query parameter is required',
    })
  }

  const codeChallenge = req.query['code_challenge']
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

  const codeChallengeMethod = req.query['code_challenge_method']
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
    expiresAt: new Date(Date.now() + maxAge.authorizeEndpoint.authCode * 1000),
    nonce,
    redirectUri,
    scopes,
    user: user,
  }
  await collectionApi.authCode.persist({ authCode, req })

  const codeTokenPayload = createCodeTokenPayload({
    authCodeId: authCode.id,
    clientId: client.id,
    codeChallengeMethod,
    codeChallenge,
    expiresAtSeconds: Date.now() / 1000 + maxAge.authorizeEndpoint.authCode,
    redirectUri,
    scopes: scopes.map((scope) => scope.name),
    userId: user.id,
  })

  const code = await jwtApi.sign({ payload: codeTokenPayload })

  if (typeof code !== 'string') {
    throw jwtErrorFactory({ description: 'Error signing code token' })
  }

  const redirectUrlObj = new URL(redirectUri)
  redirectUrlObj.searchParams.append('code', code)
  redirectUrlObj.searchParams.append('state', state)

  return { body: {}, url: redirectUrlObj.toString() }
}

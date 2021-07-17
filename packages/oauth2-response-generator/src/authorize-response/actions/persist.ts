/**
 * Create an auth code and presist to storage layer. Use these values:
 *
 * - a new authCodeId. The auth code is returned and the id must be added to the
 *   codeToken JWT that was received with the 'get' method. This is done outside
 *   this library
 * - nonce query parameter received from the client requesting access
 * - all other values are taken from the decoeded codeToken
 *
 */
import Express from 'express'
import { v4 as uuidv4 } from 'uuid'
import { AuthCodeCollection } from '../../collection/auth-code'
import { CollectionApi } from '../../collection/collection-api'
import {
  invalidRequestErrorFactory,
  jwtErrorFactory,
} from '../../error/oauth2-error'
import { CodeTokenPayload } from '../../jwt/code-token'
import { JwtApi } from '../../jwt/jwt-api'

export interface Persist {
  /** Api methods to serialize to sotrage layer */
  collectionApi: CollectionApi
  /** API methods to sign and verify JSON Web Tokens */
  jwtApi: JwtApi
  /** Server request, also passed to storage layer API */
  req: Express.Request
}

export const persist = async ({
  collectionApi,
  jwtApi,
  req,
}: Persist): Promise<AuthCodeCollection> => {
  const codeToken = req.query['code']
  if (typeof codeToken !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'Code query parameter is required',
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

  const nonce = req.query['nonce']
  if (typeof nonce !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'nonce',
      description: 'Nonce query parameter is required',
    })
  }

  const authCode: AuthCodeCollection = {
    clientId: codeTokenPayload.client_id,
    id: uuidv4(),
    codeChallenge: codeTokenPayload.code_challenge,
    codeChallengeMethod: codeTokenPayload.code_challenge_method,
    expiresAt: new Date(codeTokenPayload.expire_time * 1000),
    nonce,
    redirectUri: codeTokenPayload.redirect_uri,
    scopes: codeTokenPayload.scopes,
  }
  await collectionApi.authCode.persist({ authCode, req })

  return authCode
}

import { KJUR, hextob64 } from 'jsrsasign'
import { JWT } from './jwt'

export interface CreateAccessTokenPayload {
  /** JWT aud */
  audience: string
  /** JWT cid */
  clientId: string
  /** JWT exp */
  expiresAtSeconds: number
  /** JWT iat */
  issuedAtSeconds: number
  /** JWT iss */
  issuer: string
  /** JWT nbf */
  notBeforeSeconds: number
  /** JWT scope */
  scopes: string
  /** JWT email */
  userEmail: string
  /** JWT sub */
  userId: string
}

export const createAccessTokenPayload = ({
  audience,
  clientId,
  expiresAtSeconds,
  issuedAtSeconds,
  issuer,
  notBeforeSeconds,
  scopes,
  userEmail,
  userId,
}: CreateAccessTokenPayload) => {
  const payload: JWT = {
    aud: audience,
    cid: clientId,
    email: userEmail,
    exp: expiresAtSeconds,
    iat: issuedAtSeconds,
    iss: issuer,
    nbf: notBeforeSeconds,
    scope: scopes,
    sub: userId,
  }
  const md = new KJUR.crypto.MessageDigest({ alg: 'sha1', prov: 'cryptojs' })
  payload.jti = hextob64(<any>md.digestString(JSON.stringify(payload)))
  return payload
}

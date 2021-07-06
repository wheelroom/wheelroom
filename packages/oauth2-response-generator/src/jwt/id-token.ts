import { KJUR, hextob64 } from 'jsrsasign'
import { JWT } from './jwt'

export interface CreateIdTokenPayload {
  audience: string
  clientId: string
  expiresAtSeconds: number
  issuedAtSeconds: number
  issuer: string
  nonce?: string
  notBeforeSeconds: number
  userEmail: string
  userEmailVerified: boolean
  userId: string
  userName: string
}

export const createIdTokenPayload = ({
  audience,
  clientId,
  expiresAtSeconds,
  issuedAtSeconds,
  issuer,
  nonce,
  notBeforeSeconds,
  userEmail,
  userEmailVerified,
  userId,
  userName,
}: CreateIdTokenPayload) => {
  const payload: JWT = {
    aud: audience,
    cid: clientId,
    email_verified: userEmailVerified,
    email: userEmail,
    exp: expiresAtSeconds,
    iat: issuedAtSeconds,
    iss: issuer,
    name: userName,
    nbf: notBeforeSeconds,
    nonce,
    sub: userId,
  }
  const md = new KJUR.crypto.MessageDigest({ alg: 'sha1', prov: 'cryptojs' })
  payload.jti = hextob64(<any>md.digestString(JSON.stringify(payload)))
  return payload
}

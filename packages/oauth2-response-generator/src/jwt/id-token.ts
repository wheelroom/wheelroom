import { KJUR, hextob64 } from 'jsrsasign'

export interface CreateIdTokenPayload {
  clientId: string
  expiresAtSeconds: number
  issuedAtSeconds: number
  issuer: string
  nonce: string
  notBeforeSeconds: number
  userEmail: string
  userEmailVerified: boolean
  userId: string
  userName: string
}

export const createIdTokenPayload = ({
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
  const payload = {
    aud: clientId,
    email_verified: userEmailVerified,
    email: userEmail,
    exp: expiresAtSeconds,
    iat: issuedAtSeconds,
    iss: issuer,
    jti: '',
    name: userName,
    nbf: notBeforeSeconds,
    nonce,
    sub: userId,
  }
  const md = new KJUR.crypto.MessageDigest({ alg: 'sha1', prov: 'cryptojs' })
  payload.jti = hextob64(<any>md.digestString(JSON.stringify(payload)))
  return payload
}

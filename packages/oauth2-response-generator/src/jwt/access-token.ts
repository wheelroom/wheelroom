import { KJUR, hextob64 } from 'jsrsasign'

export interface CreateAccessTokenPayload {
  clientId: string
  clientName: string
  expiresAtSeconds: number
  issuedAtSeconds: number
  issuer: string
  notBeforeSeconds: number
  scopes: string
  userEmail: string
  userId: string
}

export const createAccessTokenPayload = ({
  clientId,
  clientName,
  expiresAtSeconds,
  issuedAtSeconds,
  issuer,
  notBeforeSeconds,
  scopes,
  userEmail,
  userId,
}: CreateAccessTokenPayload) => {
  const payload = {
    aud: clientId,
    cid: clientName,
    email: userEmail,
    exp: expiresAtSeconds,
    iat: issuedAtSeconds,
    iss: issuer,
    jti: '',
    nbf: notBeforeSeconds,
    scope: scopes,
    sub: userId,
  }
  const md = new KJUR.crypto.MessageDigest({ alg: 'sha1', prov: 'cryptojs' })
  payload.jti = hextob64(<any>md.digestString(JSON.stringify(payload)))
  return payload
}

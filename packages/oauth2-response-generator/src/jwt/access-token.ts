export interface CreateAccessTokenPayload {
  clientName: string
  expiresAtSeconds: number
  issuedAtSeconds: number
  notBeforeSeconds: number
  jwtId: string
  scopes: string
  userEmail: string
  userId: string
}

export const createAccessTokenPayload = ({
  clientName,
  expiresAtSeconds,
  issuedAtSeconds,
  notBeforeSeconds,
  jwtId,
  scopes,
  userEmail,
  userId,
}: CreateAccessTokenPayload) => {
  return {
    aud: undefined,
    cid: clientName,
    email: userEmail,
    exp: expiresAtSeconds,
    iat: issuedAtSeconds,
    iss: undefined,
    jti: jwtId,
    nbf: notBeforeSeconds,
    scope: scopes,
    sub: userId,
  }
}

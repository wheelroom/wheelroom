export interface IdTokenPayload {
  clientId: string
  expiresAtSeconds: number
  issuedAtSeconds: number
  jwtId: string
  nonce: string
  notBeforeSeconds: number
  userEmail: string
  userEmailVerified: string
  userId: string
  userName: string
}

export const idTokenPayload = ({
  clientId,
  expiresAtSeconds,
  issuedAtSeconds,
  jwtId,
  nonce,
  notBeforeSeconds,
  userEmail,
  userEmailVerified,
  userId,
  userName,
}: IdTokenPayload) => {
  return {
    aud: clientId,
    email_verified: userEmailVerified,
    email: userEmail,
    exp: expiresAtSeconds,
    iat: issuedAtSeconds,
    iss: process.env.OAUTH2_ISSUER || 'no-issuer',
    jti: jwtId,
    name: userName,
    nbf: notBeforeSeconds,
    nonce,
    sub: userId,
  }
}

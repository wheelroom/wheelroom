export interface JWT {
  aud?: string
  cid?: string
  exp?: number | string
  iat?: number | string
  iss?: string
  jti?: string
  nbf?: number | string
  scope?: string
  sub?: string
}

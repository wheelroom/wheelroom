export type JWT = {
  /**
   * Audience - Identifies the recipients that the JWT is intended for. Each
   * principal intended to process the JWT must identify itself with a value in
   * the audience claim. If the principal processing the claim does not identify
   * itself with a value in the aud claim when this claim is present, then the
   * JWT must be rejected.
   */
  aud: string
  /**
   * The cid claim carries the client identifier of the OAuth 2.0 client that
   * requested the token.
   */
  cid: string
  /**
   * Identifies the expiration time on and after which the JWT must not be
   * accepted for processing. The value must be a NumericDate:[9] either an
   * integer or decimal, representing seconds past 1970-01-01 00:00:00Z.
   */
  exp: number
  /**
   * Identifies the time at which the JWT was issued. The value must be a
   * NumericDate.
   */
  iat: number
  /**
   * Identifies principal that issued the JWT.
   */
  iss: string
  /**
   * Case sensitive unique identifier of the token even among different issuers.
   */
  jti?: string
  /**
   * Identifies the time on which the JWT will start to be accepted for
   * processing. The value must be a NumericDate.
   */
  nbf: number
  /**
   * Identifies the subject of the JWT.
   */
  sub: string
  [custom: string]: any
}

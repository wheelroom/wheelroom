export interface CreateCodeTokenPayload {
  /** Auth code storage layer record id */
  authCodeId: string
  /** Client id claim */
  clientId: string
  /** Code challende string */
  codeChallenge: string
  /** Code challenge method */
  codeChallengeMethod: string
  /** Token expires at claim */
  expiresAtSeconds: number
  /**
   * Optional field to keep auth flow flags like e.g. 'email', 'pwOk',
   * 'concentOk', etc.
   */
  flow?: Record<string, string | boolean>
  /** Redirect url claim */
  redirectUri: string
  /** Scope claim */
  scopes: string[]
  /** User id claim */
  userId: string
}

export interface CodeTokenPayload {
  auth_code_id: string
  client_id: string
  code_challenge_method: string
  code_challenge: string
  expire_time: number
  flow?: Record<string, string | boolean>
  redirect_uri: string
  scopes: string[]
  user_id: string
}

export const createCodeTokenPayload = ({
  authCodeId,
  clientId,
  codeChallenge,
  codeChallengeMethod,
  expiresAtSeconds,
  flow,
  redirectUri,
  scopes,
  userId,
}: CreateCodeTokenPayload): CodeTokenPayload => {
  return {
    auth_code_id: authCodeId,
    client_id: clientId,
    code_challenge_method: codeChallengeMethod,
    code_challenge: codeChallenge,
    expire_time: expiresAtSeconds,
    flow,
    redirect_uri: redirectUri,
    scopes,
    user_id: userId,
  }
}

export interface CreateCodeTokenPayload {
  /** Auth code storage layer record id, added when the code has been persisted */
  authCodeId?: string
  /** Client id claim */
  clientId: string
  /** Code challende string */
  codeChallenge: string
  /** Code challenge method */
  codeChallengeMethod: string
  /** Token expires at claim */
  expiresAtSeconds: number
  /**
   * Optional field to keep auth flow flags like e.g. 'validEmail',
   * 'concentPassed', etc.
   */
  flowState?: Record<string, string | any>
  /** Redirect url claim */
  redirectUri: string
  /** Scope claim */
  scopes: string[]
  /**
   * Must be added after user verification. This happens on the oauth server but
   * outside the scope of this library. The user id is to be picked up by token
   * request directly after the authorize request. This is mandatory because the
   * token request responds with an id token. THe id token contains user details
   * which requires the token enpoint to fetch the user from the storage layer.
   */
  userId?: string
}

export interface CodeTokenPayload {
  auth_code_id?: string
  client_id: string
  code_challenge_method: string
  code_challenge: string
  expire_time: number
  flowState?: Record<string, string | any>
  redirect_uri: string
  scopes: string[]
  user_id?: string
}

export const createCodeTokenPayload = ({
  authCodeId,
  clientId,
  codeChallenge,
  codeChallengeMethod,
  expiresAtSeconds,
  flowState,
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
    flowState,
    redirect_uri: redirectUri,
    scopes,
    user_id: userId,
  }
}

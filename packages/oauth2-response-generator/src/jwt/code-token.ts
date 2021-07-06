export interface CreateCodeTokenPayload {
  authCodeId: string
  clientId: string
  codeChallenge: string
  codeChallengeMethod: string
  expiresAtSeconds: number
  redirectUri: string
  scopes: string[]
  userId: string
}

export interface CodeTokenPayload {
  auth_code_id: string
  client_id: string
  code_challenge_method: string
  code_challenge: string
  expire_time: number
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
    redirect_uri: redirectUri,
    scopes,
    user_id: userId,
  }
}

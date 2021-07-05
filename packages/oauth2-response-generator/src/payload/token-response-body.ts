export interface TokenResponseBodyPayload {
  accessToken: string
  expiresAtSeconds: number
  idToken: string
  refreshToken: string
  scopes: string
}

export const tokenResponseBodyPayload = ({
  accessToken,
  expiresAtSeconds,
  idToken,
  refreshToken,
  scopes,
}: TokenResponseBodyPayload) => {
  return {
    access_token: accessToken,
    expires_in: expiresAtSeconds,
    id_token: idToken,
    refresh_token: refreshToken,
    scope: scopes,
    token_type: 'Bearer',
  }
}

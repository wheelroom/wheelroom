export interface TokenResponseBodyPayload {
  accessToken: string
  expiresInSeconds: number
  idToken: string
  refreshToken: string
  scopes: string
}

export const tokenResponseBodyPayload = ({
  accessToken,
  expiresInSeconds,
  idToken,
  refreshToken,
  scopes,
}: TokenResponseBodyPayload) => {
  return {
    access_token: accessToken,
    expires_in: expiresInSeconds,
    id_token: idToken,
    refresh_token: refreshToken,
    scope: scopes,
    token_type: 'Bearer',
  }
}

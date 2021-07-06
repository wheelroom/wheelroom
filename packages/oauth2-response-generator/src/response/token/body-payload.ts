export interface BodyPayload {
  accessToken: string
  expiresInSeconds: number
  idToken: string
  refreshToken: string
  scopes: string
}

export const bodyPayload = ({
  accessToken,
  expiresInSeconds,
  idToken,
  refreshToken,
  scopes,
}: BodyPayload) => {
  return {
    access_token: accessToken,
    expires_in: expiresInSeconds,
    id_token: idToken,
    refresh_token: refreshToken,
    scope: scopes,
    token_type: 'Bearer',
  }
}

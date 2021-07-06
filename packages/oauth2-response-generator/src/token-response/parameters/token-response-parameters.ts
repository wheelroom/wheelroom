export interface TokenResponseParameters {
  accessToken: string
  expiresInSeconds: number
  idToken?: string
  refreshToken: string
  scopes: string
}

export const tokenResponseParameters = ({
  accessToken,
  expiresInSeconds,
  idToken,
  refreshToken,
  scopes,
}: TokenResponseParameters) => {
  return {
    access_token: accessToken,
    expires_in: expiresInSeconds,
    id_token: idToken,
    refresh_token: refreshToken,
    scope: scopes,
    token_type: 'Bearer',
  }
}

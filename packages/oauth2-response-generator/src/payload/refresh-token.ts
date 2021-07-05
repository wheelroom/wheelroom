export interface RefreshTokenPayload {
  accessTokenId: string
  clientId: string
  expiresAtSeconds: number
  refreshTokenId: string
  scopes: string
  userId: string
}

export const refreshTokenPayload = ({
  accessTokenId,
  clientId,
  expiresAtSeconds,
  refreshTokenId,
  scopes,
  userId,
}: RefreshTokenPayload) => {
  return {
    access_token_id: accessTokenId,
    client_id: clientId,
    expire_time: expiresAtSeconds,
    refresh_token_id: refreshTokenId,
    scope: scopes,
    user_id: userId,
  }
}

export interface RefreshTokenPayload {
  accessTokenId: string
  clientId: string
  expiresAtSeconds: number
  refreshTokenId: string
  scopes: string
  userId: string
}

export interface RawRefreshTokenPayload {
  access_token_id: string
  client_id: string
  expire_time: number
  refresh_token_id: string
  scope: string
  user_id: string
}

export const refreshTokenPayload = ({
  accessTokenId,
  clientId,
  expiresAtSeconds,
  refreshTokenId,
  scopes,
  userId,
}: RefreshTokenPayload): RawRefreshTokenPayload => {
  return {
    access_token_id: accessTokenId,
    client_id: clientId,
    expire_time: expiresAtSeconds,
    refresh_token_id: refreshTokenId,
    scope: scopes,
    user_id: userId,
  }
}

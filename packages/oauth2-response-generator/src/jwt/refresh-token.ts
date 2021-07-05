export interface RefreshTokenPayload {
  clientId: string
  expiresAtSeconds: number
  scopes: string
  userId: string
}

export interface RawRefreshTokenPayload {
  client_id: string
  expire_time: number
  scope: string
  user_id: string
}

export const refreshTokenPayload = ({
  clientId,
  expiresAtSeconds,
  scopes,
  userId,
}: RefreshTokenPayload): RawRefreshTokenPayload => {
  return {
    client_id: clientId,
    expire_time: expiresAtSeconds,
    scope: scopes,
    user_id: userId,
  }
}

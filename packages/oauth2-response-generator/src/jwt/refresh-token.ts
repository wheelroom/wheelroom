export interface CreateRefreshTokenPayload {
  clientId: string
  expiresAtSeconds: number
  scopes: string
  userId: string
}

export interface RefreshTokenPayload {
  client_id: string
  expire_time: number
  scope: string
  user_id: string
}

export const createRefreshTokenPayload = ({
  clientId,
  expiresAtSeconds,
  scopes,
  userId,
}: CreateRefreshTokenPayload): RefreshTokenPayload => {
  return {
    client_id: clientId,
    expire_time: expiresAtSeconds,
    scope: scopes,
    user_id: userId,
  }
}

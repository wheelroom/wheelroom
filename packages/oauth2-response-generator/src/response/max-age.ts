// All max age settings are in seconds
export type MaxAge = {
  authorizeEndpoint: {
    authCode: number
  }
  tokenEndpoint: {
    authorizationCodeGrant: {
      body: number
      accessToken: number
      idToken: number
      refreshToken: number
    }
    refreshTokenGrant: {
      body: number
      accessToken: number
      refreshToken: number
    }
  }
}

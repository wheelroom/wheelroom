// All max age settings are in seconds
export type MaxAge = {
  authorizeEndpoint: {
    codeToken: number
  }
  tokenEndpoint: {
    authorizationCodeGrant: {
      response: number
      accessToken: number
      idToken: number
      refreshToken: number
    }
    refreshTokenGrant: {
      response: number
      accessToken: number
      refreshToken: number
    }
  }
}

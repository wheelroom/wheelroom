import { ClientCollection } from './client'
import { ScopeCollection } from './scope'
import { UserCollection } from './user'

export interface TokenCollection<UserAgent = any> {
  accessToken: string
  accessTokenExpiresAt: Date
  refreshToken?: string
  refreshTokenExpiresAt?: Date
  client: ClientCollection
  user?: UserCollection
  scopes: ScopeCollection[]
  appUrl?: string
  userAgent?: UserAgent
}

// export interface OAuthTokenRepository {
//   issueToken(
//     client: OAuthClient,
//     scopes: OAuthScope[],
//     user?: OAuthUser,
//     request?: RequestInterface
//   ): Promise<OAuthToken>

//   issueRefreshToken(
//     accessToken: OAuthToken,
//     request?: RequestInterface
//   ): Promise<OAuthToken>

//   persist(accessToken: OAuthToken): Promise<void>

//   revoke(
//     accessTokenToken: OAuthToken,
//     request?: RequestInterface
//   ): Promise<void>

//   isRefreshTokenRevoked(refreshToken: OAuthToken): Promise<boolean>

//   getByRefreshToken(
//     refreshTokenToken: string,
//     request?: RequestInterface
//   ): Promise<OAuthToken>
// }

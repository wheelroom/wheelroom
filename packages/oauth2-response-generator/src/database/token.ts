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
  // HEALTHTRAIN: Added so that each app/device (user agent) combination all get
  // their own token set
  appUrl?: string
  userAgent?: UserAgent
}

// // HEALTHTRAIN: Added request field
// export interface OAuthTokenRepository {
//   issueToken(
//     client: OAuthClient,
//     scopes: OAuthScope[],
//     user?: OAuthUser,
//     request?: RequestInterface
//   ): Promise<OAuthToken>

//   // HEALTHTRAIN: Add request field
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

//   // HEALTHTRAIN: Added request field
//   getByRefreshToken(
//     refreshTokenToken: string,
//     request?: RequestInterface
//   ): Promise<OAuthToken>
// }

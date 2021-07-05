import { ClientCollection } from './client'
import { ScopeCollection } from './scope'
import { UserCollection } from './user'

export interface TokenCollection<UserAgent = any> {
  accessToken: string
  accessTokenExpiresAt: Date
  appUrl?: string
  client: ClientCollection
  refreshToken: string
  refreshTokenExpiresAt: Date
  scopes: ScopeCollection[]
  user: UserCollection
  userAgent?: UserAgent
}

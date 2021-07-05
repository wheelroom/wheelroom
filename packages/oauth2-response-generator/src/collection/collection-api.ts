import { AuthCodeCollection } from './auth-code'
import { ClientCollection } from './client'
import { ScopeCollection } from './scope'
import { TokenCollection } from './token'
import { UserCollection } from './user'

export type CollectionApi = {
  authCode: {
    persist: (authCode: AuthCodeCollection) => Promise<void>
    get: (authCodeId: string) => Promise<AuthCodeCollection>
    revoke: (id: string) => Promise<AuthCodeCollection>
  }
  client: {
    get: (clientId: string) => Promise<ClientCollection>
  }
  scope: {
    get: (names: string[]) => Promise<ScopeCollection[]>
  }
  token: {
    persist: (authCode: TokenCollection) => Promise<void>
    revoke: (accessToken: string) => Promise<void>
    refreshToken: {
      get: (refreshToken: string) => Promise<TokenCollection>
      revoke: (refreshToken: string) => Promise<void>
    }
  }
  user: {
    get: (userId: string) => Promise<UserCollection>
  }
}

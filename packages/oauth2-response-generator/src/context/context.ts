import Express from 'express'
import { AuthCodeCollection } from '../collection/auth-code'
import { ClientCollection } from '../collection/client'
import { ScopeCollection } from '../collection/scope'
import { TokenCollection } from '../collection/token'
import { UserCollection } from '../collection/user'

export type Context = {
  collections: {
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
  jwt: {
    parse: (jwt: string) => Promise<Record<string, any>>
    sign: (payload: Record<string, any>) => Promise<string>
    verify: (jwt: string) => Promise<Record<string, any>>
  }
  req: Express.Request
  user: UserCollection
}

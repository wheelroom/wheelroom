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
      getById: (id: string) => Promise<AuthCodeCollection>
    }
    client: {
      getById: (id: string) => Promise<ClientCollection>
    }
    scope: {
      getByName: (names: string[]) => Promise<ScopeCollection[]>
    }
    token: {
      persist: (authCode: TokenCollection) => Promise<void>
    }
    user: {
      getById: (id: string) => Promise<UserCollection>
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

import Express from 'express'
import { AuthCodeCollection } from './auth-code'
import { ClientCollection } from './client'
import { ScopeCollection } from './scope'
import { TokenCollection } from './token'
import { UserCollection } from './user'

type AuthCodePresist = {
  authCode: AuthCodeCollection
  req: Express.Request
}
type AuthCodeGet = {
  authCodeId: string
  req: Express.Request
}
type AuthCodeRevoke = {
  authCodeId: string
  req: Express.Request
}
type ClientGet = {
  clientId: string
  req: Express.Request
}
type ScopeGet = {
  scopeNames: string[]
  req: Express.Request
}
type TokenPersist = {
  token: TokenCollection
  req: Express.Request
}
type TokenRevoke = {
  accessToken: string
  req: Express.Request
}
type TokenRefreshTokenGet = {
  refreshToken: string
  req: Express.Request
}
type TokenRefreshTokenRevoke = {
  refreshToken: string
  req: Express.Request
}
type UserGet = {
  userId: string
  req: Express.Request
}

export type CollectionApi = {
  authCode: {
    persist: ({ authCode, req }: AuthCodePresist) => Promise<void>
    get: ({ authCodeId, req }: AuthCodeGet) => Promise<AuthCodeCollection>
    revoke: ({ authCodeId, req }: AuthCodeRevoke) => Promise<AuthCodeCollection>
  }
  client: {
    get: ({ clientId, req }: ClientGet) => Promise<ClientCollection>
  }
  scope: {
    get: ({ scopeNames, req }: ScopeGet) => Promise<ScopeCollection[]>
  }
  token: {
    persist: ({ token, req }: TokenPersist) => Promise<void>
    revoke: ({ accessToken, req }: TokenRevoke) => Promise<void>
    refreshToken: {
      get: ({
        refreshToken,
        req,
      }: TokenRefreshTokenGet) => Promise<TokenCollection>
      revoke: ({ refreshToken, req }: TokenRefreshTokenRevoke) => Promise<void>
    }
  }
  user: {
    get: ({ userId, req }: UserGet) => Promise<UserCollection>
  }
}

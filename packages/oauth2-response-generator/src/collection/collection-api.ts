import Express from 'express'
import { AuthCodeCollection } from './auth-code'
import { ClientCollection } from './client'
import { ScopeCollection } from './scope'
import { TokenCollection } from './token'
import { UserCollection } from './user'

type BaseArguments = {
  req: Express.Request
}
type AuthCodePresist = BaseArguments & {
  authCode: AuthCodeCollection
}
type AuthCodeGet = BaseArguments & {
  authCodeId: string
}
type AuthCodeRevoke = BaseArguments & {
  authCodeId: string
}
type ClientGet = BaseArguments & {
  clientId: string
}
type ScopeGet = BaseArguments & {
  scopeNames: string[]
}
type TokenPersist = BaseArguments & {
  token: TokenCollection
}
type TokenRevoke = BaseArguments & {
  accessToken: string
}
type TokenRefreshTokenGet = BaseArguments & {
  refreshToken: string
}
type TokenRefreshTokenRevoke = BaseArguments & {
  refreshToken: string
}
type UserGet = BaseArguments & {
  userId: string
}

export type CollectionApi = {
  authCode: {
    persist: ({ authCode, req }: AuthCodePresist) => Promise<void>
    get: ({ authCodeId, req }: AuthCodeGet) => Promise<AuthCodeCollection>
    revoke: ({ authCodeId, req }: AuthCodeRevoke) => Promise<void>
    [otherMethods: string]: any
  }
  client: {
    get: ({ clientId, req }: ClientGet) => Promise<ClientCollection>
    [otherMethods: string]: any
  }
  scope: {
    get: ({ scopeNames, req }: ScopeGet) => Promise<ScopeCollection[]>
    [otherMethods: string]: any
  }
  token: {
    persist: ({ token, req }: TokenPersist) => Promise<void>
    revoke: ({ accessToken, req }: TokenRevoke) => Promise<void>
    [otherMethods: string]: any
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
    [otherMethods: string]: any
  }
  [otherCollections: string]: any
}

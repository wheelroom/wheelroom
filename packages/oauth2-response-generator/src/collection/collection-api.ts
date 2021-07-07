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
  /** Revoke both access and refresh token, given one is provided */
  accessToken?: string
  /** Revoke both access and refresh token, given one is provided */
  refreshToken?: string
}
type TokenGet = BaseArguments & {
  /** Get both access and refresh token, given one is provided */
  accessToken?: string
  /** Get both access and refresh token, given one is provided */
  refreshToken?: string
}
type UserGet = BaseArguments & {
  userId: string
}

export type CollectionApi = {
  authCode: {
    persist: ({ authCode, req }: AuthCodePresist) => Promise<void>
    get: ({ authCodeId, req }: AuthCodeGet) => Promise<AuthCodeCollection>
    revoke: ({ authCodeId, req }: AuthCodeRevoke) => Promise<void>
  }
  client: {
    get: ({ clientId, req }: ClientGet) => Promise<ClientCollection>
  }
  scope: {
    get: ({ scopeNames, req }: ScopeGet) => Promise<ScopeCollection[]>
  }
  token: {
    persist: ({ token, req }: TokenPersist) => Promise<void>
    revoke: ({ accessToken, refreshToken, req }: TokenRevoke) => Promise<void>
    get: ({
      accessToken,
      refreshToken,
      req,
    }: TokenGet) => Promise<TokenCollection>
  }
  user: {
    get: ({ userId, req }: UserGet) => Promise<UserCollection>
  }
}

import { ScopeCollection } from './scope'

export type Grant = 'authorization_code' | 'refresh_token'

export interface ClientCollection {
  id: string
  name: string
  secret?: string
  redirectUris: string[]
  allowedGrants: Grant[]
  scopes: ScopeCollection[]
}

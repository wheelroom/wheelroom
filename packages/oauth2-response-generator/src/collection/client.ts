import { ScopeCollection } from './scope'

export type Grant = 'authorization_code' | 'refresh_token'

export interface ClientCollection {
  allowedGrants: Grant[]
  id: string
  name: string
  redirectUris: string[]
  scopes: ScopeCollection[]
  secret?: string
}

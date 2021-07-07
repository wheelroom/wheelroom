import { ClientCollection } from './client'
import { ScopeCollection } from './scope'

export interface AuthCodeCollection {
  client: ClientCollection
  id: string
  codeChallenge: string
  codeChallengeMethod: string
  expiresAt: Date
  nonce: string
  redirectUri: string
  scopes: ScopeCollection[]
}

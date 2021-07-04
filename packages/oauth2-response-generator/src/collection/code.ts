import { ClientCollection } from './client'
import { ScopeCollection } from './scope'
import { UserCollection } from './user'

export interface CodeCollection {
  code: string
  redirectUri?: string
  codeChallenge?: string
  codeChallengeMethod?: string
  nonce?: string
  expiresAt: Date
  user?: UserCollection
  client: ClientCollection
  scopes: ScopeCollection[]
}

// export interface OAuthAuthCodeRepository {
//   getByIdentifier(authCodeCode: string): Promise<OAuthAuthCode>

//   issueAuthCode(
//     client: OAuthClient,
//     user: OAuthUser | undefined,
//     scopes: OAuthScope[]
//   ): OAuthAuthCode

//   persist(authCode: OAuthAuthCode): Promise<void>
//   isRevoked(authCodeCode: string): Promise<boolean>
//   revoke(authCodeCode: string): Promise<void>
// }

import { Grant } from '../grant/grant'
import { ScopeCollection } from './scope'

export interface ClientCollection {
  id: string
  name: string
  secret?: string
  redirectUris: string[]
  allowedGrants: Grant[]
  scopes: ScopeCollection[]
}

// export function isClientConfidential(client: OAuthClient): boolean {
//   return !!client.secret
// }

// export interface OAuthClientRepository {
//   getByIdentifier(clientId: string): Promise<OAuthClient>

//   isClientValid(
//     grantType: GrantIdentifier,
//     client: OAuthClient,
//     clientSecret?: string
//   ): Promise<boolean>
// }

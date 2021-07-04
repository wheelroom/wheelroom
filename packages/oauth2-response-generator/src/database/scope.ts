export interface ScopeCollection {
  name: string
  [key: string]: any
}

// export interface OAuthScopeRepository {
//   getAllByIdentifiers(scopeNames: string[]): Promise<OAuthScope[]>

//   finalize(
//     scopes: OAuthScope[],
//     identifier: GrantIdentifier,
//     client: OAuthClient,
//     user_id?: string
//   ): Promise<OAuthScope[]>
// }

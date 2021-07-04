export interface UserCollection {
  id: string
  [key: string]: any
}

// export type ExtraAccessTokenFields = Record<string, string | number | boolean>

// export interface OAuthUserRepository {
//   getUserByCredentials(
//     identifier: string,
//     password?: string,
//     grantType?: GrantIdentifier,
//     client?: OAuthClient
//   ): Promise<OAuthUser | undefined>

//   extraAccessTokenFields?(
//     user: OAuthUser
//   ): Promise<ExtraAccessTokenFields | undefined>
// }

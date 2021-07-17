export interface AuthCodeCollection {
  clientId: string
  id: string
  codeChallenge: string
  codeChallengeMethod: string
  expiresAt: Date
  nonce: string
  redirectUri: string
  scopes: string[]
}

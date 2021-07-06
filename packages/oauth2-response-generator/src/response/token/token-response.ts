import { OAuth2Response, TokenResponse } from '../response'
import { authorizationCodeGrant } from './grants/authorization-code-grant'
import { refreshTokenGrant } from './grants/refresh-token-grant'

export const tokenResponse = async (
  args: TokenResponse
): Promise<OAuth2Response> => {
  const urlObj = new URL(args.req.headers.location || '')
  const grantType = urlObj.searchParams.get('grant_type')

  switch (grantType) {
    case 'authorization_code':
      return authorizationCodeGrant(args)

    case 'refresh_token':
      return refreshTokenGrant(args)

    default:
      return { body: {}, url: '' }
  }
}

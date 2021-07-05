import { Context } from '../../context/context'
import { OAuth2Response } from '../response'
import { authorizationCodeGrant } from './authorization-code-grant'
import { refreshTokenGrant } from './refresh-token-grant'

export interface TokenResponse {
  context: Context
}

export const tokenResponse = async ({
  context,
}: TokenResponse): Promise<OAuth2Response> => {
  const urlObj = new URL(context.req.headers.location || '')
  const grantType = urlObj.searchParams.get('grant_type')

  switch (grantType) {
    case 'authorization_code':
      return authorizationCodeGrant({ context })

    case 'refresh_token':
      return refreshTokenGrant({ context })

    default:
      return { body: {}, headers: {}, url: '' }
  }
}

import Express from 'express'
import { authorizeResponse } from './authorize-response'
import { tokenResponse } from './token-response'

export interface ResponseGenerator {
  action: 'authorize' | 'token'
  req: Express.Request
}

export const responseGenerator = ({ action, req }: ResponseGenerator) => {
  const urlObj = new URL(req.headers.location || '')
  const responeType = urlObj.searchParams.get('response_type')
  const grantType = urlObj.searchParams.get('grant_type')

  // response_type (authorize endpoint)
  // - code
  //
  // grant_type (token endpoint)
  // - authorization_code
  // - refresh_token
  // - client_credentials

  switch (action) {
    case 'authorize':
      return authorizeResponse({ req })
    case 'token':
      return tokenResponse({ req })

    default:
      break
  }
}

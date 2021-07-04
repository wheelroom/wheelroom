import { authorizeResponse } from './authorize-response'
import { finalizeAuthorizeResponse } from './finalize-authorize-response'
import { tokenResponse } from './token-response'

export interface ResponseGenerator {
  action: 'authorize' | 'finalizeAuthorize' | 'token'
  req: Express.Request
}

export const responseGenerator = ({ action, req }: ResponseGenerator) => {
  switch (action) {
    case 'authorize':
      return authorizeResponse({ req })
    case 'finalizeAuthorize':
      return finalizeAuthorizeResponse({ req })
    case 'token':
      return tokenResponse({ req })

    default:
      break
  }
}

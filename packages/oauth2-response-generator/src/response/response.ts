import { Context } from '../context/context'
import { authorizeResponse } from './authorize/authorize-response'
import { tokenResponse } from './token/token-response'

export type OAuth2Response = {
  body: Record<string, any>
  headers: Record<string, any>
  url: string
}

export interface ResponseUrl {
  context: Context
  endpoint: 'authorize' | 'token'
}

export const responseUrl = async ({
  endpoint,
  context,
}: ResponseUrl): Promise<OAuth2Response> => {
  switch (endpoint) {
    case 'authorize':
      return await authorizeResponse({ context })
    case 'token':
      return await tokenResponse({ context })
    default:
      return { body: {}, headers: {}, url: '' }
  }
}

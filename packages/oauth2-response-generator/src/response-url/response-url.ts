import { Context } from '../context/context'
import { authorizeResponse } from './authorize-response'
import { tokenResponse } from './token-response'

export interface ResponseUrl {
  context: Context
  endpoint: 'authorize' | 'token'
}

export const responseUrl = async ({ endpoint, context }: ResponseUrl) => {
  switch (endpoint) {
    case 'authorize':
      return await authorizeResponse({ context })
    case 'token':
      return await tokenResponse({ context })
    default:
      break
  }
}

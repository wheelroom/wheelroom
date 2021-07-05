import { ClientCollection } from '../collection/client'
import { invalidRequestErrorFactory } from '../error/oauth2-error'
import { Context } from './context'

export interface RequestToRedirectUri {
  context: Context
  client: ClientCollection
}

export const requestToRedirectUri = ({
  context,
  client,
}: RequestToRedirectUri) => {
  const redirectUri =
    context.req.body['redirect_uri'] || context.req.query['redirect_uri']

  if (!redirectUri) {
    throw invalidRequestErrorFactory({
      arg: 'redirect_uri',
      description: 'Redirect uri is required',
    })
  }

  if (typeof redirectUri !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'redirect_uri',
      description: 'The redirect uri must be a string',
    })
  }

  const redirectUrlObj = new URL(redirectUri)
  if (redirectUrlObj.hash) {
    throw invalidRequestErrorFactory({
      arg: 'redirect_uri',
      description: 'Redirect uri cannot contain a hash',
    })
  }

  if (redirectUrlObj.protocol) {
    throw invalidRequestErrorFactory({
      arg: 'redirect_uri',
      description: 'Redirect uri must specify the protocol',
    })
  }

  if (!client.redirectUris.includes(redirectUri)) {
    throw invalidRequestErrorFactory({
      arg: 'redirect_uri',
      description: 'The client_id / redirect_uri combination is invalid',
    })
  }
  return redirectUri
}

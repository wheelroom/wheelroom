import Express from 'express'
import { ClientCollection } from '../collection/client'
import { invalidRequestErrorFactory } from '../error/oauth2-error'

export interface RequestToRedirectUri {
  client: ClientCollection
  req: Express.Request
}

export const requestToRedirectUri = ({ client, req }: RequestToRedirectUri) => {
  const redirectUri = req.body['redirect_uri'] || req.query['redirect_uri']

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

  if (!client.redirectUris.includes(redirectUrlObj.origin)) {
    throw invalidRequestErrorFactory({
      arg: 'redirect_uri',
      description: 'The client_id / redirect_uri-origin combination is invalid',
    })
  }
  return redirectUri
}

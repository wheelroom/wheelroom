import {
  invalidClientErrorFactory,
  invalidRequestErrorFactory,
} from '../error/oauth2-error'
import { headerTobasicAuth } from '../lib/header-to-basic-auth'
import { Context } from './context'

export interface RequestToClient {
  context: Context
}

export const requestToClient = ({ context }: RequestToClient) => {
  const basicAuth = headerTobasicAuth({
    authHeader: context.req.headers['authorization'],
  })

  let clientId
  let clientSecret

  if (basicAuth) {
    clientId = basicAuth.username
    clientSecret = basicAuth.password
  } else {
    clientId = context.req.body['client_id']
    clientSecret = context.req.body['client_secret']
  }

  if (Array.isArray(clientId)) {
    throw invalidRequestErrorFactory({
      arg: 'client_id',
      description: 'Client id cannot be an array',
    })
  }

  if (!clientId) {
    throw invalidRequestErrorFactory({
      arg: 'client_id',
      description: 'Client id is required',
    })
  }

  if (Array.isArray(clientSecret)) {
    throw invalidRequestErrorFactory({
      arg: 'client_secret',
      description: 'Client secret cannot be an array',
    })
  }

  const knownClient = context.collections.client.getById(clientId)

  if (knownClient.secret && !clientSecret) {
    throw invalidRequestErrorFactory({
      arg: 'client_secret',
      description: `Client secret is required for client ${clientId}`,
    })
  }

  if (knownClient.secret && clientSecret !== knownClient.secret) {
    throw invalidClientErrorFactory({
      description: `Invalid client credentials`,
    })
  }

  return knownClient
}

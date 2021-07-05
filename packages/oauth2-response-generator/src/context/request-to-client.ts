import {
  invalidClientErrorFactory,
  invalidRequestErrorFactory,
} from '../error/oauth2-error'
import { headerTobasicAuth } from '../lib/header-to-basic-auth'
import { Context } from './context'

export interface RequestToClient {
  context: Context
}

export const requestToClient = async ({ context }: RequestToClient) => {
  const basicAuth = headerTobasicAuth({
    authHeader: context.req.headers['authorization'],
  })

  let clientId
  let clientSecret

  if (basicAuth) {
    clientId = basicAuth.username
    clientSecret = basicAuth.password
  } else {
    clientId = context.req.body['client_id'] || context.req.query['client_id']
    clientSecret =
      context.req.body['client_secret'] || context.req.query['client_secret']
  }

  if (typeof clientId !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'client_id',
      description: 'Client id must be string',
    })
  }

  if (!clientId) {
    throw invalidRequestErrorFactory({
      arg: 'client_id',
      description: 'Client id is required',
    })
  }

  if (typeof clientSecret !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'client_secret',
      description: 'Client secret must be a string',
    })
  }

  const knownClient = await context.collections.client.get(clientId)

  if (!knownClient || !knownClient.name) {
    throw invalidClientErrorFactory({
      description: `Unknown client: ${clientId}`,
    })
  }

  if (knownClient.secret && !clientSecret) {
    throw invalidRequestErrorFactory({
      arg: 'client_secret',
      description: `Client secret required, client: ${clientId}`,
    })
  }

  if (knownClient.secret && clientSecret !== knownClient.secret) {
    throw invalidClientErrorFactory({
      description: `Invalid client credentials`,
    })
  }

  return knownClient
}

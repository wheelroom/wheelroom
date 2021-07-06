import Express from 'express'
import {
  invalidClientErrorFactory,
  invalidRequestErrorFactory,
} from '../error/oauth2-error'
import { CollectionApi } from '../collection/collection-api'
import { headerTobasicAuth } from './header-to-basic-auth'

export interface RequestToClient {
  collectionApi: CollectionApi
  req: Express.Request
}

export const requestToClient = async ({
  collectionApi,
  req,
}: RequestToClient) => {
  const basicAuth = headerTobasicAuth({
    authHeader: req.headers['authorization'],
  })

  let clientId
  let clientSecret

  if (basicAuth) {
    clientId = basicAuth.username
    clientSecret = basicAuth.password
  } else {
    clientId = req.body['client_id'] || req.query['client_id']
    clientSecret = req.body['client_secret'] || req.query['client_secret']
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

  const knownClient = await collectionApi.client.get({ clientId, req })

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

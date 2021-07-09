import Express from 'express'
import { ClientCollection } from '../collection/client'
import {
  invalidRequestErrorFactory,
  invalidScopeErrorFactory,
} from '../error/oauth2-error'

export interface RequestToScopes {
  /** Only scope that are listed with the client are accepted */
  client: ClientCollection
  req: Express.Request
}

export const requestToScopes = async ({ client, req }: RequestToScopes) => {
  const scope = req.body['scope'] || req.query['scope']
  if (!scope) return []

  if (typeof scope !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'scope',
      description: 'Scope must be a string with a space separated list',
    })
  }

  const scopeNames = scope.split(' ')
  const clientScopeNames = client.scopes.map((scope) => scope.name)
  const invalidScopeNames = scopeNames.filter(
    (name) => !clientScopeNames.includes(name)
  )

  if (invalidScopeNames.length > 0) {
    throw invalidScopeErrorFactory({
      description: `Scope does not exist for this client: ${invalidScopeNames.join(
        ', '
      )}`,
    })
  }

  const validScopes = client.scopes.filter((scope) =>
    clientScopeNames.includes(scope.name)
  )

  return validScopes
}

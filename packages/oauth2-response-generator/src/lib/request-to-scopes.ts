import Express from 'express'
import {
  invalidRequestErrorFactory,
  invalidScopeErrorFactory,
} from '../error/oauth2-error'
import { CollectionApi } from '../collection/collection-api'

export interface RequestToScopes {
  collectionApi: CollectionApi
  req: Express.Request
}

export const requestToScopes = async ({
  collectionApi,
  req,
}: RequestToScopes) => {
  const scope = req.body['scope'] || req.query['scope']
  if (!scope) return []

  if (typeof scope !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'scope',
      description: 'Scope must be a string with a space separated list',
    })
  }

  const scopeNames = scope.split(' ')
  const allValidScopes = await collectionApi.scope.get({ scopeNames, req })
  const allValidScopesNames = allValidScopes.map((scope) => scope.name)
  const invalidScopeNames = scopeNames.filter(
    (name) => !allValidScopesNames.includes(name)
  )

  if (invalidScopeNames.length > 0) {
    throw invalidScopeErrorFactory({
      description: `Invalid scopes: ${invalidScopeNames.join(', ')}`,
    })
  }

  const validScopes = allValidScopes.filter((scope) =>
    allValidScopesNames.includes(scope.name)
  )

  return validScopes
}

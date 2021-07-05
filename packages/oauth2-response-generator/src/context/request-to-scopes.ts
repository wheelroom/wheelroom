import {
  invalidRequestErrorFactory,
  invalidScopeErrorFactory,
} from '../error/oauth2-error'
import { Context } from './context'

export interface RequestToScopes {
  context: Context
}

export const requestToScopes = async ({ context }: RequestToScopes) => {
  const scope = context.req.body['scope'] || context.req.query['scope']

  if (typeof scope !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'scope',
      description: 'Scope must be a string with a space separated list',
    })
  }

  const scopeNames = scope.split(' ')
  const allValidScopes = await context.collections.scope.getByName(scopeNames)
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

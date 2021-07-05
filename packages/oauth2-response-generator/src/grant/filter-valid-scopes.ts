import { ScopeCollection } from '../collection/scope'
import { invalidScopeErrorFactory } from '../error/oauth2-error'
import { Context } from '../response-generator/context'

export interface FilterValidScopes {
  scopes?: ScopeCollection[]
  context: Context
}

export const filterValidScopes = async ({
  scopes,
  context,
}: FilterValidScopes) => {
  if (!scopes) return []
  const scopeNames = scopes.map((scope) => scope.name)
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

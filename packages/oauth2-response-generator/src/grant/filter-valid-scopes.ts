import { invalidScopeErrorFactory } from '../error/oauth2-error'
import { Context } from '../response-generator/context'

export interface FilterValidScopes {
  scopeNames?: string[]
  context: Context
}

export const filterValidScopes = async ({
  scopeNames,
  context,
}: FilterValidScopes) => {
  if (!scopeNames) return []

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

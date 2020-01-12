/**
 * %componentVar(path:settings.asQuery)%
 *
 * Requires arguments: component
 *
 * Gets the value of the settings.asQuery variable
 *
 */

import {
  ReplaceFunctionsList,
  ReplaceParams,
  ReplaceVars,
} from '../../../types/parser'

export const componentVarFunc: ReplaceFunctionsList = [
  {
    replace: (vars: ReplaceVars, params: ReplaceParams) => {
      if (vars.component) {
        if ('path' in params) {
          const value = params.path
            .split('.')
            .reduce((o: any, i) => o[i], vars.component)
          return value
        }
      }
      return 'bug-component-not-found'
    },
    search: 'componentVar',
  },
]

/**
 * %firstAllowedComponent%
 *
 * Requires vars: field
 *
 * Works on values of fields: SingleComponentField, MultipleComponentsField
 *
 * Gets field.allowedComponents[0]
 *
 */

import {
  ReplaceFunctionsList,
  ReplaceParams,
  ReplaceVars,
} from '../../../types/parser'

export const firstAllowedComponentFunc: ReplaceFunctionsList = [
  {
    replace: (vars: ReplaceVars, params: ReplaceParams) => {
      if (
        vars.field &&
        (vars.field.type === 'singleComponent' ||
          vars.field.type === 'multipleComponents') &&
        vars.field.allowedComponents.length > 0
      ) {
        return vars.field.allowedComponents[0]
      }
      return 'bad-field-first-allowed-component'
    },
    search: 'firstAllowedComponent',
  },
]

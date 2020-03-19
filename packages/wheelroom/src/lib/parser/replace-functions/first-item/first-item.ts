/**
 * %firstItem%
 *
 * Requires vars: field
 *
 * Works on values of fields: DropdownField
 *
 * Gets field.items[0]
 *
 */

import { ReplaceFunctionsList, ReplaceVars } from '../../../../types/parser'

export const firstItemFunc: ReplaceFunctionsList = [
  {
    replace: (vars: ReplaceVars) => {
      if (
        vars.field &&
        vars.field.type === 'dropdown' &&
        vars.field.items.length > 0
      ) {
        return vars.field.items[0]
      }
      return 'bad-field-first-item'
    },
    search: 'firstItem',
  },
]

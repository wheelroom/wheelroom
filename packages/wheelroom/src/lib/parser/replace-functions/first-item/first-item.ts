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
      let value = 'bad-field-first-item'
      if (
        vars.field &&
        (vars.field.type === 'dropdown' || vars.field.type === 'checkbox') &&
        vars.field.items.length > 0
      ) {
        value = vars.field.items[0]
      }
      // If we have a locale, translations and items, use that value instead
      if (
        vars.locale &&
        vars.field &&
        vars.field.translations &&
        vars.field.translations.items &&
        vars.field?.translations.items[vars.locale]
      ) {
        value = vars.field?.translations.items[vars.locale][0]
      }
      return value
    },
    search: 'firstItem',
  },
]

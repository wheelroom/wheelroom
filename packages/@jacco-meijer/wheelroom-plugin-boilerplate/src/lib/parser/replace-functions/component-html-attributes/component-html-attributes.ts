/**
 * %componentHtmlAttributes%
 *
 * Requires vars: component
 *
 * TBW
 *
 */

import {
  FieldType,
  ReplaceFunctionsList,
  ReplaceParams,
} from '@jacco-meijer/wheelroom'
import { ReplaceVarsExt } from '../../../../types/parser'

export const componentHtmlAttributesFunc: ReplaceFunctionsList = [
  {
    replace: (vars: ReplaceVarsExt, params: ReplaceParams) => {
      if (vars.component) {
        const attrs = Object.entries(vars.component.fields)
          .map(
            ([fieldName, field]: [string, FieldType]) =>
              `${fieldName}="${
                typeof field.initialContent === 'string'
                  ? field.initialContent
                  : 'value'
              }"`
          )
          .join(' ')
        return attrs
      }
      return 'bug-componentHtmlAttributes'
    },
    search: 'componentHtmlAttributes',
  },
]

/**
 * %variationList(indent:2)%
 *
 * Requires vars: component
 *
 * TBW
 *
 */

import { ReplaceFunctionsList, ReplaceParams } from '@jacco-meijer/wheelroom'
import { ReplaceVarsExt } from '../../../../types/parser'
import { parseVariation } from './parse-variation'

export const componentHtmlAttributesFunc: ReplaceFunctionsList = [
  {
    replace: (vars: ReplaceVarsExt, params: ReplaceParams) => {
      if (vars.component && vars.componentName && vars.singleVariationName) {
        const variationList = parseVariation({
          component: vars.component,
          componentName: vars.componentName,
          params,
          singleVariationName: vars.singleVariationName,
        })
        return variationList
      } else {
        return 'bug-componentHtmlAttributes'
      }
    },
    search: 'componentHtmlAttributes',
  },
]

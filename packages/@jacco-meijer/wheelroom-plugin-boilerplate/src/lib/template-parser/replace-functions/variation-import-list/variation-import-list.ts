/**
 * %variationImportList%
 *
 * Requires vars: component, componentName, singleVariationName
 *
 * TBW
 *
 */

import { ReplaceFunctionsList, ReplaceParams } from '@jacco-meijer/wheelroom'
import { ReplaceVarsExt } from '../../../../types/parser'
import { parseVariationImport } from './parse-variation-import'

export const variationImportListFunc: ReplaceFunctionsList = [
  {
    replace: (vars: ReplaceVarsExt, params: ReplaceParams) => {
      if (vars.component && vars.componentName && vars.singleVariationName) {
        const variationImportList = parseVariationImport({
          component: vars.component,
          componentName: vars.componentName,
          singleVariationName: vars.singleVariationName,
        })
        return variationImportList
      } else {
        return 'bug-variation-import-list'
      }
    },
    search: 'variationImportList',
  },
]

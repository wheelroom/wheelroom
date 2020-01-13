/**
 * %variation% and %Variation%
 *
 * Requires vars: currentVariation, singleVariationName
 *
 * TBW
 *
 */

import { ReplaceFunctionsList, ReplaceParams } from '@jacco-meijer/wheelroom'
import { getCases } from '@jacco-meijer/wheelroom'
import { ReplaceVarsExt } from '../../../../types/parser'

export const variationFunc: ReplaceFunctionsList = [
  {
    replace: (vars: ReplaceVarsExt, params: ReplaceParams) => {
      const replacement =
        vars.currentVariation || vars.singleVariationName || 'bug-variation'
      return getCases(replacement).camelCase
    },
    search: 'variation',
  },
  {
    replace: (vars: ReplaceVarsExt, params: ReplaceParams) => {
      const replacement =
        vars.currentVariation || vars.singleVariationName || 'bug-variation'
      return getCases(replacement).pascalCase
    },
    search: 'Variation',
  },
]

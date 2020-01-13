/**
 * %componentFragment(prefix:Something)%
 *
 * Requires vars: component, componentName, components
 *
 * TBW
 *
 */

import { ReplaceFunctionsList, ReplaceParams } from '@jacco-meijer/wheelroom'
import { ReplaceVars } from '@jacco-meijer/wheelroom'
import { fragmentCreator } from './fragment-creator'

export const reactPropsFunc: ReplaceFunctionsList = [
  {
    replace: (vars: ReplaceVars, params: ReplaceParams) => {
      if (vars.componentName && vars.component && vars.components) {
        const variationList = fragmentCreator({
          component: vars.component,
          componentName: vars.componentName,
          components: vars.components,
          params,
        })
        return variationList
      }
      return 'bug-component-fragment'
    },
    search: 'reactProps',
  },
]

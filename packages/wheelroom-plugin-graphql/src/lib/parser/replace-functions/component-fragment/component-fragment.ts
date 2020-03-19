/**
 * %componentFragment(prefix:Something)%
 *
 * Requires vars: component, componentName, components
 *
 * TBW
 *
 */

import { ReplaceFunctionsList, ReplaceParams } from '@wheelroom/wheelroom'
import { ReplaceVars } from '@wheelroom/wheelroom'
import { fragmentCreator } from './fragment-creator'

export const componentFragmentFunc: ReplaceFunctionsList = [
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
    search: 'componentFragment',
  },
]

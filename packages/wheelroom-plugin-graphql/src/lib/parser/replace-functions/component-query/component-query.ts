/**
 * %componentQuery(prefix:allSomething)%
 *
 * Requires vars: component, componentName
 *
 * TBW
 *
 */

import { ReplaceFunctionsList, ReplaceParams } from '@wheelroom/wheelroom'
import { ReplaceVars } from '@wheelroom/wheelroom'
import { queryCreator } from './query-creator'

export const compoentQueryFunc: ReplaceFunctionsList = [
  {
    replace: (vars: ReplaceVars, params: ReplaceParams) => {
      if (vars.component && vars.componentName) {
        const variationImportList = queryCreator({
          component: vars.component,
          componentName: vars.componentName,
          params,
        })
        return variationImportList
      }
      return 'bug-component-query'
    },
    search: 'componentQuery',
  },
]

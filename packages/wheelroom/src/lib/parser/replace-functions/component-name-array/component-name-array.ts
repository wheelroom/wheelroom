/**
 * %componentNameArray(filter:settings.asPageSection)%
 *
 * Requires vars: components
 *
 * Gets a comma separated list of component names that have the asPageSection
 * setting set. When used within an array, the %-variable entry is removed from
 * the array and the component names are added.
 *
 */

import {
  ReplaceFunctionsList,
  ReplaceParams,
  ReplaceVars,
} from '../../../../types/parser'
import { WheelroomComponent } from '../../../../types/wheelroom-components'

export const componentNameArrayFunc: ReplaceFunctionsList = [
  {
    replace: (vars: ReplaceVars, params: ReplaceParams) => {
      if (vars.components) {
        if ('filter' in params) {
          const nameList = Object.entries(vars.components)
            .filter(([, comp]: [string, WheelroomComponent]) => {
              const value = params.filter
                .split('.')
                .reduce((o: any, i) => o[i], comp)
              return value
            })
            .map(([compName]: [string, WheelroomComponent]) => compName)
            .join(', ')
          return nameList
        }
      }
      return 'bug-components-not-found'
    },
    returnsArray: true,
    search: 'componentNameArray',
  },
]

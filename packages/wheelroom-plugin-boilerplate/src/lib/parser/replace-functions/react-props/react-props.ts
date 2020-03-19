/**
 * %reactProps(indent:2)%
 *
 * Requires vars: component, componentName
 *
 * TBW
 *
 */

import { ReplaceFunctionsList, ReplaceParams } from '@wheelroom/wheelroom'
import { ReplaceVarsExt } from '../../../../types/parser'
import { parseReactProps } from '../../parse-react-props'

export const reactPropsFunc: ReplaceFunctionsList = [
  {
    replace: (vars: ReplaceVarsExt, params: ReplaceParams) => {
      if (vars.component && vars.componentName) {
        const reactProps = parseReactProps({
          component: vars.component,
          componentName: vars.componentName,
          params,
        })
        return reactProps
      } else {
        return 'bug-react-props'
      }
    },
    search: 'reactProps',
  },
]

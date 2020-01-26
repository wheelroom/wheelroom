/**
 * %tsModelTypes(indent:4)%
 *
 * Requires vars: components
 *
 * TBW
 *
 */

import {
  getCases,
  ReplaceFunctionsList,
  ReplaceParams,
  WheelroomComponent,
} from '@jacco-meijer/wheelroom'
import { ReplaceVarsExt } from '../../../../types/parser'

export const tsModelTypesFunc: ReplaceFunctionsList = [
  {
    replace: (vars: ReplaceVarsExt, params: ReplaceParams) => {
      if (vars.components) {
        const indentLevel = params.indent ? parseInt(params.indent, 10) : 0
        const indentString = Array(indentLevel + 1).join(' ')

        let result = ''
        Object.entries(vars.components).forEach(
          ([componentName]: [string, WheelroomComponent]) => {
            const cnCase = getCases(componentName)
            result += `${indentString}| ${cnCase.pascalCase}\n`
          }
        )
        return result
      } else {
        return 'bug-ts-model-types'
      }
    },
    search: 'tsModelTypes',
  },
]

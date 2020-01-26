/**
 * %tsModels(indent:4)%
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
import { parseReactProps } from '../../parse-react-props'

export const tsModelsFunc: ReplaceFunctionsList = [
  {
    replace: (vars: ReplaceVarsExt, params: ReplaceParams) => {
      if (vars.components) {
        const indentLevel = params.indent ? parseInt(params.indent, 10) : 0
        const indentString = Array(indentLevel + 1).join(' ')
        const fieldsIndent = indentLevel + 4

        let result = ''
        Object.entries(vars.components).forEach(
          ([componentName, component]: [string, WheelroomComponent]) => {
            const cnCase = getCases(componentName)

            result += `${indentString}interface ${cnCase.pascalCase} {
${indentString}  fields: {
`
            const reactProps = parseReactProps({
              component,
              componentName,
              params: Object.assign({}, params, { indent: fieldsIndent }),
              skipFields: ['__typename'],
            })
            result += `${reactProps}\n`
            result += `${indentString}  }\n`
            result += `${indentString}  model: '${componentName}'\n`
            result += `${indentString}}\n`
          }
        )
        return result
      } else {
        return 'bug-ts-models'
      }
    },
    search: 'tsModels',
  },
]

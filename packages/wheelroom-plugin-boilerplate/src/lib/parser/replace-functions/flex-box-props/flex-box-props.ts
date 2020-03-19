/**
 * %flexBoxProps(indent:2)%
 *
 * Requires vars: component
 *
 * TBW
 *
 */

import {
  FieldType,
  ReplaceFunctionsList,
  ReplaceParams,
} from '@wheelroom/wheelroom'
import { ReplaceVarsExt } from '../../../../types/parser'
import { getPropValue } from './get-prop-value'

export const flexBoxPropsFunc: ReplaceFunctionsList = [
  {
    replace: (vars: ReplaceVarsExt, params: ReplaceParams) => {
      if (vars.component) {
        const indentLevel = params.indent ? parseInt(params.indent, 10) : 0
        const indentString = Array(indentLevel + 1).join(' ')

        const flexBoxes = Object.entries(vars.component.fields)
          .map(
            ([fieldName, field]: [string, FieldType]) =>
              `${indentString}<FlexContainer {...flexContainerProps}>
${indentString}  <FlexBox {...flexBoxProps}>${fieldName}</FlexBox>
${indentString}  <FlexBox {...flexBoxProps}>${
                field.required ? 'required' : 'optional'
              }</FlexBox>
${indentString}  <FlexBox {...flexBoxProps}>${field.type}</FlexBox>
${indentString}  <FlexBox {...flexBoxProps}>${getPropValue(
                fieldName,
                field
              )}</FlexBox>
${indentString}</FlexContainer>`
          )
          .join(`\n`)
        return flexBoxes
      } else {
        return 'bug-flex-box-props'
      }
    },
    search: 'flexBoxProps',
  },
]

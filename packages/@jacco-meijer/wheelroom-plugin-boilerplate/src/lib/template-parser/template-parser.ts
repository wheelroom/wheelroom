/**
 * Parse these variables:
 *
 * - %variationList(indent:2)%
 * - %reactProps(indent:2)%
 * - %variation%
 *
 */

import {
  getCases,
  replaceAll,
  WheelroomComponent,
} from '@jacco-meijer/wheelroom'
import { parseReactProps } from './parse-react-props'
import { parseVariation } from './parse-variation'
import { parseVariationImport } from './parse-variation-import'

export interface TemplatParser {
  component: WheelroomComponent
  componentName: string
  currentVariation?: string
  singleVariationName: string
  unparsed: string
}

export const templateParser = (context: TemplatParser): string => {
  let parsed = context.unparsed

  const myRegexp = /%([^%()]*)(?:\((.*):(.*)\)|)%/g
  let match = myRegexp.exec(context.unparsed)

  while (match != null) {
    const fullMatch = match[0]
    const variableName = match[1]
    const argName = match[2]
    const argValue = match[3]
    let replacement: string
    switch (variableName) {
      case 'variationImportList':
        const variationImportList = parseVariationImport({
          component: context.component,
          componentName: context.componentName,
          singleVariationName: context.singleVariationName,
        })
        parsed = replaceAll(parsed, fullMatch, variationImportList)

        break
      case 'variationList':
        const variationList = parseVariation({
          argName,
          argValue,
          component: context.component,
          componentName: context.componentName,
          singleVariationName: context.singleVariationName,
        })
        parsed = replaceAll(parsed, fullMatch, variationList)
        break
      case 'reactProps':
        const reactProps = parseReactProps({
          argName,
          argValue,
          component: context.component,
          componentName: context.componentName,
        })
        parsed = replaceAll(parsed, fullMatch, reactProps)
        break
      case 'variation':
        replacement = context.currentVariation || context.singleVariationName
        parsed = replaceAll(parsed, fullMatch, getCases(replacement).camelCase)
        break
      case 'Variation':
        replacement = context.currentVariation || context.singleVariationName
        parsed = replaceAll(parsed, fullMatch, getCases(replacement).pascalCase)
        break
    }
    match = myRegexp.exec(context.unparsed)
  }
  // console.log(parsed)
  return parsed as string
}

/**
 * Parse these variables:
 *
 * - %variationList(indent:2)%
 * - %reactProps(indent:2)%
 * - %variation%
 *
 */

import { replaceAll, WheelroomComponent } from '@jacco-meijer/wheelroom'
import { parseReactProps } from './parse-react-props'
import { parseVariation } from './parse-variation'

export const singleVariationName = 'single'

interface TemplatParser {
  componentName: string
  component: WheelroomComponent
  currentVariation?: string
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
    switch (variableName) {
      case 'variationList':
        const variationList = parseVariation({
          argName,
          argValue,
          component: context.component,
          componentName: context.componentName,
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
        parsed = replaceAll(
          parsed,
          fullMatch,
          context.currentVariation || singleVariationName
        )
        break
    }
    match = myRegexp.exec(context.unparsed)
  }
  // console.log(parsed)
  return parsed as string
}

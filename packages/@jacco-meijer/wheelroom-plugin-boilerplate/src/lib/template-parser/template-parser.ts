/**
 * Parse these variables:
 *
 * - %variationImportList%
 * - %variationList(indent:2)%
 * - %reactProps(indent:2)%
 * - %variation%
 * - %componentHtmlAttributes%
 *
 */

import {
  FieldType,
  getCases,
  replaceAll,
  WheelroomComponent,
} from '@jacco-meijer/wheelroom'
import { parseReactProps } from './parse-react-props'
import { parseVariation } from './parse-variation'
import { parseVariationImport } from './parse-variation-import'

export interface TemplateParser {
  component: WheelroomComponent
  componentName: string
  currentVariation?: string
  singleVariationName: string
  unparsed: string
}

export const templateParser = (context: TemplateParser): string => {
  let parsed = context.unparsed

  const myRegexp = /%([^(%]+)(?:\(([^)]+)\))?%/g
  let match = myRegexp.exec(context.unparsed)

  while (match != null) {
    const params: { [name: string]: string } = {}
    const fullMatch = match[0]
    if (match[2]) {
      const splitted = match[2].split(',')
      splitted.forEach((fullParam: string) => {
        const [name, value] = fullParam.split(':')
        if (name && value) {
          params[name.trim()] = value.trim()
        }
      })
    }
    const variableName = match[1]
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
          component: context.component,
          componentName: context.componentName,
          params,
          singleVariationName: context.singleVariationName,
        })
        parsed = replaceAll(parsed, fullMatch, variationList)
        break
      case 'reactProps':
        const reactProps = parseReactProps({
          component: context.component,
          componentName: context.componentName,
          params,
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
      case 'componentHtmlAttributes':
        if (context.component) {
          const attrs = Object.entries(context.component.fields)
            .map(
              ([fieldName, field]: [string, FieldType]) =>
                `${fieldName}="${
                  typeof field.initialContent === 'string'
                    ? field.initialContent
                    : 'value'
                }"`
            )
            .join(' ')
          parsed = replaceAll(parsed, fullMatch, attrs)
        }
        break
    }
    match = myRegexp.exec(context.unparsed)
  }
  // console.log(parsed)
  return parsed as string
}

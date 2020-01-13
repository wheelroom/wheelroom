/**
 * Parse these variables:
 *
 * - %componentQuery(prefix:allSomething)%
 * - %componentFragment(prefix:Something)%
 *
 */

import {
  replaceAll,
  WheelroomComponent,
  WheelroomComponents,
} from '@jacco-meijer/wheelroom'
import { fragmentCreator } from './replace-functions/component-fragment/fragment-creator'
import { queryCreator } from './replace-functions/component-query/query-creator'

export interface TemplateParser {
  component: WheelroomComponent
  components: WheelroomComponents
  componentName: string
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
    switch (variableName) {
      case 'componentQuery':
        const variationImportList = queryCreator({
          component: context.component,
          componentName: context.componentName,
          params,
        })
        parsed = replaceAll(parsed, fullMatch, variationImportList)

        break
      case 'componentFragment':
        const variationList = fragmentCreator({
          component: context.component,
          componentName: context.componentName,
          components: context.components,
          params,
        })
        parsed = replaceAll(parsed, fullMatch, variationList)
        break
    }
    match = myRegexp.exec(context.unparsed)
  }
  // console.log(parsed)
  return parsed as string
}

/**
 * Parse these variables:
 *
 * - %componentQuery(prefix:allSomething)%
 * - %componentFragment(prefix:Something)%
 *
 */

import { replaceAll, WheelroomComponent } from '@jacco-meijer/wheelroom'
import { componentFragment } from './component-fragment'
import { componentQuery } from './component-query'

export interface TemplateParser {
  component: WheelroomComponent
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
        params[name.trim()] = value.trim()
      })
    }
    const variableName = match[1]
    switch (variableName) {
      case 'componentQuery':
        const variationImportList = componentQuery({
          component: context.component,
          componentName: context.componentName,
          params,
        })
        parsed = replaceAll(parsed, fullMatch, variationImportList)

        break
      case 'componentFragment':
        const variationList = componentFragment({
          component: context.component,
          componentName: context.componentName,
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

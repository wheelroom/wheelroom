/**
 * Parse these variables:
 *
 * - %componentQueries(prefix:someThing)%
 * - %componentFragment(prefix:SomeThing)%
 * - %variation%
 *
 */

import { replaceAll, WheelroomComponent } from '@jacco-meijer/wheelroom'
import { componentFragment } from './component-fragment'
import { componentQueries } from './component-queries'

interface TemplatParser {
  component: WheelroomComponent
  componentName: string
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
      case 'componentQueries':
        const variationImportList = componentQueries({
          argName,
          argValue,
          component: context.component,
          componentName: context.componentName,
        })
        parsed = replaceAll(parsed, fullMatch, variationImportList)

        break
      case 'componentFragment':
        const variationList = componentFragment({
          argName,
          argValue,
          component: context.component,
          componentName: context.componentName,
        })
        parsed = replaceAll(parsed, fullMatch, variationList)
        break
    }
    match = myRegexp.exec(context.unparsed)
  }
  // console.log(parsed)
  return parsed as string
}

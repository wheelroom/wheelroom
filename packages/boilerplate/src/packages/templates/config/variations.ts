import { Vars } from '../types/vars'

export const variations = (vars: Vars) => {
  // Skip this template if not present in filter array
  if (!vars.options.filter.includes(vars.answers.wheelroomType)) {
    return
  }

  return `/**
 * Component variation constants
 *
 * Each description serves as an ID's and is visible for Contentful content editors
 *
 * Component type: ${vars.componentName.camelCase}
 * Wheelroom type: ${vars.answers.wheelroomType}
 *
 */

export const variations = ['No variations yet']
`
}

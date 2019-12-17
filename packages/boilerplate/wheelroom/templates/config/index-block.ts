import { Vars } from '../../types/vars'

export const indexBlock = (vars: Vars) => {
  // Skip this template if not present in filter array
  if (!vars.options.filter.includes(vars.answers.wheelroomType)) {
    return
  }

  return `/**
 * Component index
 *
 * Component type: ${vars.componentName.camelCase}
 * Wheelroom type: ${vars.answers.wheelroomType}
 *
 */

import { model } from './model'

export const ${vars.componentName.camelCase} = {
  model,
}
`
}

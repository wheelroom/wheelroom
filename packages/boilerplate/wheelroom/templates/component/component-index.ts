import { Vars } from '../../types/vars'

export const componentIndex = (vars: Vars) => {
  // Skip this template if not present in filter array
  if (
    !vars.options.filter.includes(vars.component.component.model.wheelroomType)
  ) {
    return
  }

  return `/**
 * Component index
 *
 * Component type: ${vars.componentName.camelCase}
 * Wheelroom type: ${vars.component.component.model.wheelroomType}
 *
 */

export * from './${vars.componentName.dashCase}'
`
}

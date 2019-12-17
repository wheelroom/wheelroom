import { Vars } from '../../types/vars'

export const fragment = (vars: Vars) => {
  // Skip fragment if not present in filter array
  if (
    !vars.options.filter.includes(vars.component.component.model.wheelroomType)
  ) {
    return
  }
  return `/**
 * Graphql fragment
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 * Component name: ${vars.componentName.camelCase}
 * Wheelroom type: ${vars.component.component.model.wheelroomType}
 *
 */

import { graphql } from 'gatsby'
export const fragment = graphql\`${vars.component.component.fragment}\`
`
}

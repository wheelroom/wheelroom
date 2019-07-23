import { Vars } from '../../types/vars'
import { componentFields } from '../helpers/component-fields'
import { getGraphqlFields } from '../partials/get-graphql-fields'

export const graphqlFragment = (vars: Vars) => {
  // Skip this template if not present in filter array
  if (!vars.options.filter.includes(vars.answers.wheelroomType)) {
    return
  }

  const fields = componentFields(vars.answers.componentFields)
  const graphqlFields = getGraphqlFields(fields)

  return `/**
 * Graphql definitions
 *
 * Component type: ${vars.componentName.camelCase}
 * Wheelroom type: ${vars.answers.wheelroomType}
 *
 */

export const fragment = \`
  fragment ${vars.componentName.pascalCase} on Contentful${vars.componentName.pascalCase} {
${graphqlFields}
  }
\`
`
}

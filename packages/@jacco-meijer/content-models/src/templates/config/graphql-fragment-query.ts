import { Vars } from '../../types/vars'
import { componentFields } from '../helpers/component-fields'
import { getGraphqlFields } from '../partials/get-graphql-fields'

export const graphqlFragmentQuery = (vars: Vars) => {
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

export const query = \`
{
  ${vars.componentName.camelCase}: allContentful${vars.componentName.pascalCase}(
    limit: 10
  ) {
    edges {
      node {
        id
        slug
      }
    }
  }
}
\`
`
}

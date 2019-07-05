import { Vars } from '../../../create-new-model'

export const graphqlFragmentTemplate = (vars: Vars) =>
  `/**
 * Graphql definitions
 *
 * Component type: ${vars.componentType}
 * Wheelroom type: ${vars.wheelroomType}
 *
 */

export const fragment = \`
  fragment ${vars.componentClassName} on Contentful${vars.componentClassName} {
${vars.graphqlFields}
  }
\`
`

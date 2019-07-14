export const graphqlFragmentTemplate = (vars: any) =>
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

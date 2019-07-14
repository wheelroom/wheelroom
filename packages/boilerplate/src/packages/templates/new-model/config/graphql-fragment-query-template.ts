export const graphqlFragmentQueryTemplate = (vars: any) =>
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

export const query = \`
{
  ${vars.componentType}: allContentful${vars.componentClassName}(
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
\``

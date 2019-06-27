export const graphqlTemplate = (
  componentType: string,
  componentClassName: string,
  graphqlFields: string,
  wheelroomType: string
) =>
  `/**
 * Graphql definitions
 *
 * Component type: ${componentType}
 * Wheelroom type: ${wheelroomType}
 *
 */

export const fragment = \`
  fragment ${componentClassName} on Contentful${componentClassName} {
${graphqlFields}
  }
\`
${
  wheelroomType === 'global' || wheelroomType === 'subPage'
    ? `export const query = \`
{
  ${componentType}: allContentful${componentClassName}(
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
    : ``
}`

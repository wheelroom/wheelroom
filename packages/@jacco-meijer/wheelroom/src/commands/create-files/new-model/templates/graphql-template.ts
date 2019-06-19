export const graphqlTemplate = (
  componentType: string,
  componentClassName: string,
  graphqlFields: string
) => `export const query = \`
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
\`

export const fragment = \`
  fragment ${componentClassName} on Contentful${componentClassName} {
${graphqlFields}
  }
\`
`

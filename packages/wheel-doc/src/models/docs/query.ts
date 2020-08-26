/**
 * Graphql query definition
 *
 * Query type: subPage
 * Component: docs
 *
 */

export const docsQuery = {
  componentName: 'docs',
  query: `
  {
    docs: allContentfulDocs {
      edges {
        node {
          id
          node_locale
          slug
        }
      }
    }
  }
`,
  type: 'subPage',
}

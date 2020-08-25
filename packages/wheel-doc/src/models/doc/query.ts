/**
 * Graphql query definition
 *
 * Query type: subPage
 * Component: doc
 *
 */

export const docQuery = {
  componentName: 'doc',
  query: `
  {
    doc: allContentfulDoc {
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

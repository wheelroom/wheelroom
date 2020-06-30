/**
 * Graphql query definition
 *
 * Query type: page
 * Component: page
 *
 */

export const pageQuery = {
  componentName: 'page',
  query: `
  {
    page: allContentfulPage {
      edges {
        node {
          contentful_id
          id
          node_locale
          path
        }
      }
    }
  }
`,
  type: 'page',
}

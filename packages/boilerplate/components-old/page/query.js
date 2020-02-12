/**
 * Graphql query definition
 *
 * Query type: page
 * Component: page
 *
 */

module.exports = {
  componentName: 'page',
  query: `
  {
    page: allContentfulPage {
      edges {
        node {
          id
          node_locale
          path
          pathName
        }
      }
    }
  }
`,
  type: 'page',
}

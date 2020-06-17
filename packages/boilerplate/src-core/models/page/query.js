/**
 * Graphql query definition
 *
 * Query type: page
 * Component: page
 *
 */

// eslint-disable-next-line no-undef
module.exports = {
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

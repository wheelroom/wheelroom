/* eslint-disable no-undef */
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

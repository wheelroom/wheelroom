/**
 * Graphql query definition
 *
 * Query type: subPage
 * Component: doc
 *
 */

module.exports = {
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

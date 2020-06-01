/**
 * Graphql query definition
 *
 * Query type: subPage
 * Component: doc
 *
 */

// eslint-disable-next-line no-undef
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

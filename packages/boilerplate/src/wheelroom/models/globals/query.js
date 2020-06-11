/* eslint-disable no-undef */
/**
 * Graphql query definition
 *
 * Query type: global
 * Component: globals
 *
 */

// eslint-disable-next-line no-undef
module.exports = {
  componentName: 'globals',
  query: `
  {
    globals: allContentfulGlobals {
      edges {
        node {
          id
          node_locale
        }
      }
    }
  }
`,
  type: 'global',
}

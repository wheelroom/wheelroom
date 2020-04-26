/* eslint-disable no-undef */
/**
 * Graphql query definition
 *
 * Query type: global
 * Component: globals
 *
 */

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

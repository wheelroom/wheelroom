/**
 * Graphql query definition
 *
 * Query type: global
 * Component: globals
 *
 */

module.exports = {
  componentName: 'globals',
  type: 'global',
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
}

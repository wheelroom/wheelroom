/**
 * Graphql query definition
 *
 * Query type: global
 * Component: globals
 *
 */

export const globalsQuery = {
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

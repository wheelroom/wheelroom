/**
* Graphql query definition
*
* Query type: global
* Component: globals
*
*/

export const componentName = 'globals'
export const type = 'global'
export const query = `
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
`
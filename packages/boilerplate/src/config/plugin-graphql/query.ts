export const query = `/**
 * Graphql query definition
 *
 * Query type: %componentVar(path:graphQL.createPageQuery)%
 * Component: %componentName%
 *
 */


module.exports = {
  componentName: '%componentName%',
  query: \`
%componentQuery(prefix:allContentful, indent:2)%
\`,
  type: '%componentVar(path:graphQL.createPageQuery)%',
}
`

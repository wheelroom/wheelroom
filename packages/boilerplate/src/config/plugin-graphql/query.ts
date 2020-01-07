export const query = `/**
 * Graphql query definition
 *
 * Query type: %createPageQuery%
 * Component: %componentName%
 *
 */


module.exports = {
  componentName: '%componentName%',
  query: \`
%componentQuery(prefix:allContentful, indent:2)%
\`,
  type: '%createPageQuery%',
}
`

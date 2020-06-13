export const query = `/**
 * Graphql query definition
 *
 * Query type: %componentVar(path:settings.asQuery)%
 * Component: %componentName%
 *
 */

module.exports = {
  componentName: '%componentName%',
  query: \`
%componentQuery(prefix:allContentful, indent:2)%
\`,
  type: '%componentVar(path:settings.asQuery)%',
}
`

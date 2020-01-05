export const query = `/**
* Graphql query definition
*
* Query type: %createPageQuery%
*
*/

export const type = '%createPageQuery%'
export const query = \`
%componentQuery(prefix:allContentful)%
\``

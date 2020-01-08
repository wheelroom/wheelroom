export const query = `/**
* Graphql query definition
*
* Query type: %asQuery%
* Component: %componentName%
*
*/

export const componentName = '%componentName%'
export const type = '%asQuery%'
export const query = \`
%componentQuery(prefix:allContentful)%
\``

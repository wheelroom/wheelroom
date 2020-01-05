export const query = `/**
* Graphql query definition
*
* Query type: %createPageQuery%
* Component: %componentName%
*
*/

export const componentName = '%componentName%'
export const type = '%createPageQuery%'
export const query = \`
%componentQuery(prefix:allContentful)%
\``

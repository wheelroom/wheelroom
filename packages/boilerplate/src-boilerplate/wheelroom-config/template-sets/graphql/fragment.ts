export const fragment = `/* eslint-disable prettier/prettier */
/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: %componentName%
 */

import { graphql } from 'gatsby'

export const fragment = graphql\`
%componentFragment(prefix:Contentful, indent:0)%
\`
`

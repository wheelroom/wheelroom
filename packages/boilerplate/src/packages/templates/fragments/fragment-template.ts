export const fragmentTemplate = = (vars: any) => `/**
 * Graphql fragment
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 * Component type: ${vars.componentType}
 * Wheelroom type: ${vars.wheelroomType}
 *
 */

import { graphql } from 'gatsby'
export const fragment = graphql\`${vars.fragment}\`
`

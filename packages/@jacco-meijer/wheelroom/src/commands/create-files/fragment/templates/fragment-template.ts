export const fragmentTemplate = (
  fragment: string,
  componentType: string,
  wheelroomType: string
) => `/**
 * Graphql fragment
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 * Component type: ${componentType}
 * Wheelroom type: ${wheelroomType}
 *
 */

import { graphql } from 'gatsby'
export const fragment = graphql\`${fragment}\`
`

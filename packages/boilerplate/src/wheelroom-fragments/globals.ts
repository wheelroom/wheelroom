/**
 * Graphql fragment
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 * Component name: globals
 * Wheelroom type: global
 *
 */

import { graphql } from 'gatsby'
export const fragment = graphql`
  fragment Globals on ContentfulGlobals {
    addressLine1
    addressLine2
    emailAddress
    githubUrl
    heading
    linkedinUrl
    siteAuthor
    siteDescription
    siteKeywords
    siteTitle
  }
`

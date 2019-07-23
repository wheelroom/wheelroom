/**
 * Graphql definitions
 *
 * Component type: globals
 * Wheelroom type: global
 *
 */

export const fragment = `
  fragment Globals on ContentfulGlobals {
    addressLine1
    addressLine2
    emailAddress
    githubUrl
    heading
    linkedinUrl
    phoneNumber
    siteAuthor
    siteDescription
    siteKeywords
    siteTitle
  }
`

export const query = `
{
  globals: allContentfulGlobals(
    limit: 10
  ) {
    edges {
      node {
        id
        node_locale
      }
    }
  }
}
`

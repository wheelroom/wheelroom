import { graphql } from 'gatsby'

export const ContentfulPartGlobalsQuery = graphql`
  fragment PartGlobals on ContentfulPartGlobals {
    addressLine1
    addressLine2
    emailAddress
    heading
    siteAuthor
    siteDescription
    siteKeywords
    siteTitle
  }
`

import { graphql } from 'gatsby'
export const fragment = graphql`
  fragment GlobalsPart on ContentfulGlobalsPart {
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

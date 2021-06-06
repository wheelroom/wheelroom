import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment Globals on Contentful_Globals {
    siteAuthor
    siteKeywords
    skipToContentHeading
    siteHeading
    siteDescription
  }
`

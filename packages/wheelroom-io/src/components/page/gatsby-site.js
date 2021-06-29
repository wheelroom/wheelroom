import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment Gatsby_Site on Site {
    siteMetadata {
      siteVersion
      siteUrl
      legal {
        version
        description
        url
      }
    }
  }
`

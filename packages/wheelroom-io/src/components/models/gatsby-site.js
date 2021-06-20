import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment GatsbySite on Site {
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

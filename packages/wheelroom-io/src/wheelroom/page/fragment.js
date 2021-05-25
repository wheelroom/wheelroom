import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment Page on ContentfulPage {
    __typename
    path
    sections {
      ... on Node {
        ...TopicSection
        ...TextSection
        ...NavigationSection
        ...TableSection
      }
    }
    theme
    seoTitle
    seoDescription
    seoImage {
      title
      description
      file {
        url
        fileName
        contentType
        details {
          image {
            height
            width
          }
        }
      }
    }
    seoKeywords
  }
`

import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment Page on Contentful_Page {
    __typename
    sectionsCollection {
      items {
        ... on Contentful_TopicSection {
          sys {
            id
          }
          variation
          topicsCollection {
            items {
              sys {
                id
              }
              abstract
              heading
              icon
            }
          }
        }
      }
    }
  }
`

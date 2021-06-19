import { graphql } from 'gatsby'
import { ContentfulNavigationSegment } from '../navigation-segment/contentful-navigation-segment'

export type ContentfulNavigationSection = {
  __typename: string
  actions: ContentfulNavigationSegment
}

export const fragment = graphql`
  fragment NavigationSection on Contentful_NavigationSection {
    __typename
    title
    actions {
      ...NavigationSegment
    }
    headerCollection(limit: 5) {
      items {
        ...NavigationSegment
      }
    }
  }
`

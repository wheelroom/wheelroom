import { graphql } from 'gatsby'
import { ContentfulNavigationSegment } from '../navigation-segment/contentful-navigation-segment'

export type ContentfulNavigation = {
  __typename: string
  variation?: string
  segments?: ContentfulNavigationSegment[]
}

export const fragment = graphql`
  fragment Navigation on ContentfulNavigation {
    __typename
    variation
    segments {
      ... on Node {
        ...NavigationSegment
      }
    }
  }
`

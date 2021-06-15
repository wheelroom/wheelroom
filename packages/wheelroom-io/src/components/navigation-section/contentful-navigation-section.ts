import { graphql } from 'gatsby'
import { ContentfulNavigation } from '../navigation/contentful-navigation'

export type ContentfulNavigationSection = {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  navigation?: ContentfulNavigation[]
  eventId?: string
}

export const fragment = graphql`
  fragment NavigationSection on ContentfulNavigationSection {
    __typename
    variation
    navigation {
      ... on Node {
        ...Navigation
      }
    }
    eventId
  }
`

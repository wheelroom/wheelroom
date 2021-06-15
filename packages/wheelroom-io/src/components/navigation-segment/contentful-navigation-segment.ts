import { graphql } from 'gatsby'
import { ContentfulAction } from '../action/contentful-action'

export type ContentfulNavigationSegment = {
  /** Gatsby fetched data */
  __typename: string
  abstract?: {
    abstract?: string
  }
  heading?: string
  actions?: ContentfulAction[]
}

export const fragment = graphql`
  fragment NavigationSegment on ContentfulNavigationSegment {
    __typename
    heading
    abstract {
      abstract
    }
    actions {
      ... on Node {
        ...Action
      }
    }
  }
`

import { graphql } from 'gatsby'
import { ContentfulAction } from '../action/contentful-action'

export type ContentfulNavigationSegment = {
  heading: string
  abstract: string
  actionsCollection: {
    items: ContentfulAction[]
  }
}

export const fragment = graphql`
  fragment NavigationSegment on Contentful_NavigationSegment {
    heading
    abstract
    actionsCollection(limit: 5) {
      items {
        ...Action
      }
    }
  }
`

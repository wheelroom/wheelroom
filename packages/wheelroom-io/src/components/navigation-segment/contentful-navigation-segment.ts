import { graphql } from 'gatsby'

export type ContentfulNavigationSegment = {
  heading: string
  abstract: string
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

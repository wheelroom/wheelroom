/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: listSection
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
fragment ListSection on ContentfulListSection {
  heading
  listItems {
    listItemHeading
    listItemHiddenText
    listItemImage {
      title
      description
      fluid(maxWidth: 1024) {
        sizes
        src
        srcSet
      }
    }
    listItemInfoText {
      listItemInfoText
    }
    listItemView
  
  }
  variation
  __typename
  title
}
`

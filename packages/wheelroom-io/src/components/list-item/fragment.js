/* eslint-disable prettier/prettier */
/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: listItem
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
fragment ListItem on ContentfulListItem {
  __typename
  title
  view
  link {
    __typename
    title
    path
    heading
    navigationHeading
    image {
      title
      description
      fluid(maxWidth: 1024) {
        sizes
        src
        srcSet
      }
    }
    abstract {
      abstract
    }
    seoTitle
    seoDescription
  }
  heading
  image {
    title
    description
    fluid(maxWidth: 1024) {
      sizes
      src
      srcSet
    }
  }
  abstract {
    abstract
  }
  extraText
}
`

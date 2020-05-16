/* eslint-disable prettier/prettier */
/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: action
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
fragment Action on ContentfulAction {
  __typename
  anchor
  data
  description
  eventId
  heading
  page {
    __typename
    title
    path
    navigationHeading
    theme
    seoTitle
    seoDescription
  }
  query
  title
  url
}
`

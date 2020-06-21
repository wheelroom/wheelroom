/* eslint-disable prettier/prettier */
/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: pageSection
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment PageSection on ContentfulPageSection {
    __typename
    variation
    eventId
    topics {
      ... on Node {
        ...Topic
      }
    }
    topicOptions
  }
`
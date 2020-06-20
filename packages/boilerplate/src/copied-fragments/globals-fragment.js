/* eslint-disable prettier/prettier */
/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: globals
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment Globals on ContentfulGlobals {
    __typename
    siteAuthor
    siteDescription
    siteHeading
    siteKeywords
    siteImage {
      title
      description
      fluid {
        ...GatsbyContentfulFluid
      }
      file {
        url
        fileName
        contentType
        details {
          image {
            height
            width
          }
        }
      }
    }
    siteEmbeds {
      ... on Node {
        ...Embed
      }
    }
    skipToContentHeading
  }
`

/* eslint-disable prettier/prettier */
/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: doc
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment Doc on ContentfulDoc {
    __typename
    heading
    abstract {
      abstract
    }
    media {
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
    icon
    slug
    text {
      json
    }
    parent {
      __typename
      title
      heading
      abstract {
        abstract
      }
      media {
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
      icon
      slug
      text {
        json
      }
      sortOrder
    }
    sortOrder
  }
`

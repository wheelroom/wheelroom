/* eslint-disable prettier/prettier */
/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: blog
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
fragment Blog on ContentfulBlog {
  __typename
  title
  slug
  date
  text {
    json
  }
  labels {
    ... on Node {
      ...Topic
    }
  }
  topics {
    ... on Node {
      ...Topic
    }
  }
  authors {
    ... on Node {
      ...Topic
    }
  }
  seoTitle
  seoDescription
  seoImage {
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
  seoKeywords
}
`

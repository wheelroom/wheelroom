import { graphql } from 'gatsby'
import { Document } from '@contentful/rich-text-types'

export type ContentfulTextSection = {
  __typename?: string
  sys?: {
    id: string
  }
  variant?: string
  text?: {
    json?: Document
  }
}

export const actionFragment = graphql`
  fragment TextSection on Contentful_TextSection {
    __typename
    sys {
      id
    }
    variant
    text {
      json
    }
  }
`

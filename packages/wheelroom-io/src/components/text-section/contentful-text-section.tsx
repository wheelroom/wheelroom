import { graphql } from 'gatsby'

export type ContentfulTextSection = {
  __typename?: string
  sys?: {
    id: string
  }
  variant?: string
  text?: {
    json?: string
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

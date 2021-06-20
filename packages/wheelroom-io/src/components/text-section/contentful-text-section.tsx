import { graphql } from 'gatsby'
import { Document } from '@contentful/rich-text-types'
import { ContentfulAsset } from '../asset/contentful-asset'
import { ContentfulPage } from '../page/contentful-page'
import { ContentfulTopicSection } from '../topic-section/contentful-topic-section'

export type ContentfulTextEntry = ContentfulPage | ContentfulTopicSection

export type ContentfulTextSection = {
  __typename?: string
  sys?: {
    id: string
  }
  variant?: string
  text?: {
    json?: Document
    links: {
      assets: {
        block: ContentfulAsset[]
        hyperlink: ContentfulAsset[]
      }
      entries: {
        block: ContentfulTextEntry[]
        hyperlink: ContentfulTextEntry[]
        inline: ContentfulTextEntry[]
      }
    }
  }
}

export const textSectionFragment = graphql`
  fragment TextSection on Contentful_TextSection {
    __typename
    sys {
      id
    }
    variant
    text {
      json
      links {
        assets {
          hyperlink {
            ...Asset
          }
          block {
            ...Asset
          }
        }
        entries {
          block {
            ... on Contentful_Page {
              sys {
                id
              }
              title
              path
            }
            ...TopicSection
          }
          hyperlink {
            ... on Contentful_Page {
              sys {
                id
              }
              title
              path
            }
            ...TopicSection
          }
          inline {
            ... on Contentful_Page {
              sys {
                id
              }
              title
              path
            }
            ...TopicSection
          }
        }
      }
    }
  }
`

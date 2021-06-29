import { graphql } from 'gatsby'
import { Document } from '@contentful/rich-text-types'
import { ContentfulTopicSection } from '../topic/contentful-topic-section'
import { ContentfulPage } from '../page/contentful-page'
import { ContentfulAsset } from './contentful-asset'

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
  fragment Wheelroom_TextSection on Contentful_TextSection {
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
            ...Wheelroom_Asset
          }
          block {
            ...Wheelroom_Asset
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
            ...Wheelroom_TopicSection
          }
          hyperlink {
            ... on Contentful_Page {
              sys {
                id
              }
              title
              path
            }
            ...Wheelroom_TopicSection
          }
          inline {
            ... on Contentful_Page {
              sys {
                id
              }
              title
              path
            }
            ...Wheelroom_TopicSection
          }
        }
      }
    }
  }
`

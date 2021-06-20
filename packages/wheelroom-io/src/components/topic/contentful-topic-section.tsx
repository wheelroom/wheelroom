import { graphql } from 'gatsby'
import { ContentfulTopic } from './contentful-topic'

export type TopicSectionVariant =
  | 'block'
  | 'card'
  | 'divider'
  | 'featured'
  | 'gallery'
  | 'headline'
  | 'hero'
  | 'image'
  | 'navigation'
  | 'quote'
  | 'showcase'
  | 'text'
  | 'video'

export type TopicSectionOption =
  | 'reversedOrder'
  | 'hideIcon'
  | 'hideMedia'
  | 'hideHeading'
  | 'hideAbstract'
  | 'hideAction'

export type TopicSectionOptions = Partial<Record<TopicSectionOption, boolean>>

export interface ContentfulTopicSection extends TopicSectionOptions {
  sys?: {
    id: string
  }
  __typename?: string
  variant?: TopicSectionVariant
  topicsCollection?: {
    items: ContentfulTopic[]
  }
}

export const fragment = graphql`
  fragment TopicSection on Contentful_TopicSection {
    __typename
    sys {
      id
    }
    variant
    reversedOrder
    hideIcon
    hideMedia
    hideHeading
    hideAbstract
    hideAction
    topicsCollection(limit: 20) {
      items {
        ...Topic
      }
    }
  }
`

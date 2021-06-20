import { graphql } from 'gatsby'
import { ContentfulAction } from '../models/contentful-action'
import { ContentfulAsset } from '../models/contentful-asset'
import { ContentfulEmbed } from '../models/contentful-embed'

export type ContentfulTopic = {
  sys?: {
    id: string
  }
  abstract?: string
  actionsCollection?: {
    items: ContentfulAction[]
  }
  heading?: string
  icon?: string
  mediaCollection?: {
    items: ContentfulAsset[]
  }
  mediaEmbed?: ContentfulEmbed
  poster?: ContentfulAsset
}

export const topicFragment = graphql`
  fragment Topic on Contentful_Topic {
    sys {
      id
    }
    heading
    abstract
    icon
    actionsCollection(limit: 5) {
      items {
        ...Action
      }
    }
    mediaCollection(limit: 4) {
      items {
        ...Asset
      }
    }
    mediaEmbed {
      ...Embed
    }
    poster {
      ...Asset
    }
  }
`

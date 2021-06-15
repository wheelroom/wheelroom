import { graphql } from 'gatsby'
import { ContentfulAction } from '../action/contentful-action'
import { ContentfulAsset } from '../asset/contentful-asset'
import { ContentfulEmbed } from '../embed/contentful-embed'

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
    actionsCollection(limit: 1) {
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

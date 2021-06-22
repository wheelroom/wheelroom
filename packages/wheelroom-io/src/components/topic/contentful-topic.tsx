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
  fragment Wheelroom_Topic on Contentful_Topic {
    sys {
      id
    }
    heading
    abstract
    icon
    actionsCollection(limit: 5) {
      items {
        ...Wheelroom_Action
      }
    }
    mediaCollection(limit: 4) {
      items {
        ...Wheelroom_Asset
      }
    }
    mediaEmbed {
      ...Wheelroom_Embed
    }
    poster {
      ...Wheelroom_Asset
    }
  }
`

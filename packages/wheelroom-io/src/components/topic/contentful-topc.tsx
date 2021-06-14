import { graphql } from 'gatsby'
import { Embed } from '../media/embed'
import { ContentfulAction } from '../action/contentful-action'
import { ContentfulMediaBreakpoint } from '../media/contentful-media-breakpoint'
import { ContentfulAsset } from '../media/contentful-asset'

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
  media?: ContentfulAsset
  mediaBreakpoint?: ContentfulMediaBreakpoint
  mediaEmbed?: Embed
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
    media {
      ...Asset
    }
    mediaBreakpoint {
      ...MediaBreakpoint
    }
    mediaEmbed {
      ...Embed
    }
    poster {
      ...Asset
    }
  }
`

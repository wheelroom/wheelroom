import { graphql } from 'gatsby'
import { Embed } from '../media/embed'
import { MediaBreakpoint } from '../media/breakpoint'
import { Asset } from '../media/asset'
import { ContentfulAction } from '../action/contentful-action'

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
  media?: Asset
  mediaBreakpoint?: MediaBreakpoint
  mediaEmbed?: Embed
  poster?: Asset
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

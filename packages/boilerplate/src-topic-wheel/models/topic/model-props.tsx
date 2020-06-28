/**
 * Component
 *
 * Component type: topic
 *
 */

import {
  ActionModelProps,
  EmbedModelProps,
  MediaBreakpointModelProps,
  MediaObject,
} from '../../../src-core'

export interface TopicModelProps {
  /** Gatsby fetched data */
  __typename: string
  heading?: string
  abstract?: {
    abstract: string
  }
  media?: MediaObject
  icon?: string | JSX.Element
  actions?: ActionModelProps[]
  poster?: MediaObject
  mediaEmbed?: EmbedModelProps
  mediaBreakpoint?: MediaBreakpointModelProps
}

/**
 * Component
 *
 * Component type: topic
 *
 */

import {
  ActionProps,
  EmbedProps,
  MediaBreakpointProps,
  MediaObject,
} from '../../../src-core'

export interface TopicProps {
  /** Gatsby fetched data */
  __typename: string
  heading?: string
  abstract?: {
    abstract: string
  }
  media?: MediaObject
  icon?: string | JSX.Element
  actions?: ActionProps[]
  poster?: MediaObject
  mediaEmbed?: EmbedProps
  mediaBreakpoint?: MediaBreakpointProps
}

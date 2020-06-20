/**
 * Component
 *
 * Component type: topic
 *
 */

import {
  EmbedProps,
  MediaBreakpointProps,
  MediaObject,
} from '../../../src-core'
import { ActionProps } from '../action/model-types'

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

/**
 * Component
 *
 * Component type: topic
 *
 */

import { EmbedProps } from '../embed/embed'
import { MediaBreakpointProps } from '../media-breakpoint/media-breakpoint'
import { MediaObject } from '../../elements/types/media'
import { ActionProps } from '../action/action'

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

/**
 * Component
 *
 * Component type: topic
 *
 */

import { EmbedProps } from '../embed/embed'
import { MediaBreakpointProps } from '../media-breakpoint/media-breakpoint'
import { MediaObject } from '../../wheelroom/wheels/element/types/media'

export interface TopicProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  heading: string
  abstract: {
    abstract: string
  }
  media: MediaObject | undefined
  icon: string | JSX.Element
  actions: any
  advancedMedia: MediaBreakpointProps | EmbedProps
}

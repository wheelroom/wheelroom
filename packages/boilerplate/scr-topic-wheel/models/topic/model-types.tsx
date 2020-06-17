/**
 * Component
 *
 * Component type: topic
 *
 */

import { EmbedProps } from '../../../src-core/models/embed/model-types'
import { MediaBreakpointProps } from '../../../src-core/models/media-breakpoint/model-types'
import { MediaObject } from '../../elements/types/media'
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

/**
 * Component
 *
 * Component type: topic
 *
 */

import {
  ActionModel,
  EmbedModel,
  MediaBreakpointModel,
  MediaGatsbyModel,
} from '../../../src-core'

export interface TopicModel {
  /** Gatsby fetched data */
  __typename: string
  heading?: string
  abstract?: {
    abstract: string
  }
  media?: MediaGatsbyModel
  icon?: string | JSX.Element
  actions?: ActionModel[]
  poster?: MediaGatsbyModel
  mediaEmbed?: EmbedModel
  mediaBreakpoint?: MediaBreakpointModel
}

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
  MediaObject,
} from '../../../src-core'

export interface TopicModel {
  /** Gatsby fetched data */
  __typename: string
  heading?: string
  abstract?: {
    abstract: string
  }
  media?: MediaObject
  icon?: string | JSX.Element
  actions?: ActionModel[]
  poster?: MediaObject
  mediaEmbed?: EmbedModel
  mediaBreakpoint?: MediaBreakpointModel
}

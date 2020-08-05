/**
 * Component interface only
 *
 * Component type: custom
 *
 */

import { MediaGatsbyModel } from '@wheelroom/core'

export interface CustomModel {
  /** Gatsby fetched data */
  __typename: string
  heading?: string
  abstract?: {
    abstract: string
  }
  media?: MediaGatsbyModel
}

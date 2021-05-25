/**
 * Component
 *
 * Component type: navigationSegment
 *
 */
import { ActionModel } from '@wheelroom/core'

export interface NavigationSegmentModel {
  /** Gatsby fetched data */
  __typename: string
  abstract?: {
    abstract?: string
  }
  heading?: string
  actions?: ActionModel[]
}

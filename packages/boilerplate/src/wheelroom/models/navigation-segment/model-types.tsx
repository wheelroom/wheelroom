/**
 * Component
 *
 * Component type: navigationSegment
 *
 */

import { ActionProps } from '../action/model-types'

export interface NavigationSegmentProps {
  /** Gatsby fetched data */
  __typename: string
  heading?: string
  actions?: ActionProps[]
}

/**
 * Component
 *
 * Component type: navigationSegment
 *
 */
import { ActionModelProps } from '../../../src-core'

export interface NavigationSegmentProps {
  /** Gatsby fetched data */
  __typename: string
  heading?: string
  actions?: ActionModelProps[]
}

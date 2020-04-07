/**
 * Component
 *
 * Component type: navigation
 *
 */

import { NavigationSegmentProps } from '../navigation-segment/navigation-segment'

export interface NavigationProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  segments: NavigationSegmentProps[]
}

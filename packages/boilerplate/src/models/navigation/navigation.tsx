/**
 * Component
 *
 * Component type: navigation
 *
 */

import { NavigationSegmentProps } from '../navigation-segment/navigation-segment'
import { ActionProps } from '../action'

export interface NavigationProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  brandAction: ActionProps
  segments: NavigationSegmentProps[]
  skipToContentHeading: string
}

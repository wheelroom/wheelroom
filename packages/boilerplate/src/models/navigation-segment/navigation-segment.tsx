/**
 * Component
 *
 * Component type: navigationSegment
 *
 */

import { ActionProps } from '../action/action'

export interface NavigationSegmentProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  heading: string
  actions: ActionProps[]
}

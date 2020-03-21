/**
 * Component
 *
 * Component type: navigation
 *
 */

import { NavigationSegmentProps } from '../navigation-segment/navigation-segment'

/**
 * The component list is removed here.
 *
 * Navigation has two variations:
 *
 * - NavigationHeader
 * - NavigationFooter
 *
 * Because we do not want to bother the editor with these variations, we didn't
 * add these variations to the component model.
 *
 * This file remains here to provide with boilerplate generated NavigationProps.
 *
 */

export interface NavigationProps {
  /** Gatsby fetched data */
  // __typename: string
  // title: string
  segments: NavigationSegmentProps[]
}

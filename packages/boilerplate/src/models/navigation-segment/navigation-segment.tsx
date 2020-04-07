/**
 * Component
 *
 * Component type: navigationSegment
 *
 */

import { PageProps } from '../page/page'

export interface NavigationSegmentProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  heading: string
  pages: PageProps[]
}

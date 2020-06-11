import { NavigationSegmentProps } from '../navigation-segment/navigation-segment'

export interface NavigationProps {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  segments?: NavigationSegmentProps[]
}

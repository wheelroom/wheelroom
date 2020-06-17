import { NavigationSegmentProps } from '../navigation-segment/model-types'

export interface NavigationProps {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  segments?: NavigationSegmentProps[]
}

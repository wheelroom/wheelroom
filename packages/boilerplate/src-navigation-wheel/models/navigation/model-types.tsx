import { NavigationSegmentModelProps } from '../navigation-segment/model-props'

export interface NavigationModelProps {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  segments?: NavigationSegmentModelProps[]
}

import { NavigationSegmentModelProps } from '../navigation-segment/model-types'

export interface NavigationModelProps {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  segments?: NavigationSegmentModelProps[]
}

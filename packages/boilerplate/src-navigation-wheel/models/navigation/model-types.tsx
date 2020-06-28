import { NavigationSegmentModel } from '../navigation-segment/model-props'

export interface NavigationModel {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  segments?: NavigationSegmentModel[]
}

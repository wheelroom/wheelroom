import { NavigationSegmentModel } from '../navigation-segment/model'

export interface NavigationModel {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  segments?: NavigationSegmentModel[]
}

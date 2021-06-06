import { CoreSectionProps } from '@wheelroom/core'
import { NavigationModel } from '../navigation/model'

export interface NavigationSectionModel extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  navigation?: NavigationModel[]
  eventId?: string
}

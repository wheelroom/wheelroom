import { NavigationModel } from '../navigation/model'
import { CoreSectionProps } from '@wheelroom/core'

export interface NavigationSectionModel extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  navigation?: NavigationModel[]
  eventId?: string
}

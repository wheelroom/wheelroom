import { NavigationModel } from '../navigation/model'
import { CoreSectionProps } from '../../../src-core'

export interface NavigationSectionModel extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  navigation?: NavigationModel[]
  eventId?: string
}

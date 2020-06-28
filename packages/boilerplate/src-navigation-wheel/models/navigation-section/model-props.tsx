import { NavigationModel } from '../navigation/model-types'
import { CoreSectionProps } from '../../../src-core'

export interface NavigationSectionModel extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  navigation?: NavigationModel[]
  eventId?: string
}

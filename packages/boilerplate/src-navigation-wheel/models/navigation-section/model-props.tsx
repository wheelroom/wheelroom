import { NavigationModelProps } from '../navigation/model-types'
import { CoreSectionProps } from '../../../src-core'

export interface NavigationSectionModelProps extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  navigation?: NavigationModelProps[]
  eventId?: string
}

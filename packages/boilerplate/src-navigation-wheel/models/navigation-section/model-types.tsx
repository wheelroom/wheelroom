import { NavigationProps } from '../navigation/model-types'
import { CoreSectionProps } from '../../../src-core'

export interface NavigationSectionProps extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  navigation?: NavigationProps[]
  eventId?: string
}

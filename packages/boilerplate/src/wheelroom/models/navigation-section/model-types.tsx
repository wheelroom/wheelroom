import { NavigationProps } from '../navigation/model-types'
import { SectionProps } from '../../../page-template/section-props'

export interface NavigationSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  navigation?: NavigationProps[]
  eventId?: string
}

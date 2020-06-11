import { SectionProps } from '../../../page-template/section-props'
import { TextProps } from '../text/text'

export interface TextSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  text?: TextProps
  variation?: string
}

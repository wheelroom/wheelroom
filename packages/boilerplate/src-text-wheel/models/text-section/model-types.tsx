import { TextModelProps } from '../../../src-text-wheel/models/text/model-types'
import { CoreSectionProps } from '../../../src-core'

export interface TextSectionProps extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  text?: TextProps
  variation?: string
}

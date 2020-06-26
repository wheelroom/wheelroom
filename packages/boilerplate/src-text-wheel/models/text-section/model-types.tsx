import { CoreSectionProps } from '../../../src-core'
import { TextModelProps } from '../text/model-types'

export interface TextSectionModelProps extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  text?: TextModelProps
  variation?: string
}

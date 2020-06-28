import { CoreSectionProps } from '../../../src-core'

export interface TextSectionModelProps extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  text?: {
    json: string
  }
  variation?: string
}

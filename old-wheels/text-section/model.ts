import { CoreSectionProps } from '@wheelroom/core'

export interface TextSectionModel extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  text?: {
    json: string
  }
  variation?: string
}

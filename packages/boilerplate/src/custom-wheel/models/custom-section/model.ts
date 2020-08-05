import { CoreSectionProps } from '@wheelroom/core'
import { CustomModel } from '../custom/model'

export interface CustomSectionModel extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  section?: CustomModel[]
  variation?: string
}

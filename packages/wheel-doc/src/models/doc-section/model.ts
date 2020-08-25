import { CoreSectionProps } from '@wheelroom/core'
import { DocModel, AllDocModel } from '../doc/model'

export interface InjectedDocSectionModel {
  doc: DocModel
  allDoc: AllDocModel
}

export interface DocSectionModel
  extends CoreSectionProps,
    InjectedDocSectionModel {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  variation?: string
  // Doc property us injected by page-template.tsx
}

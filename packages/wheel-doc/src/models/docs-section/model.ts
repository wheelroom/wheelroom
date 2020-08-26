import { CoreSectionProps } from '@wheelroom/core'
import { DocsModel, AllDocsModel } from '../docs/model'

export interface InjectedDocsSectionModel {
  docs: DocsModel
  allDocs: AllDocsModel
}

export interface DocsSectionModel
  extends CoreSectionProps,
    InjectedDocsSectionModel {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  variation?: string
  // Doc property us injected by page-template.tsx
}

import { CoreSectionProps } from '../../../src-core'

export interface BlogSectionProps extends CoreSectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  variation?: string
  // Blog property us injected by page-template.tsx
}

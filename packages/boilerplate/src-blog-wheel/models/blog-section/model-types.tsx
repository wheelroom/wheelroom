import { SectionProps } from '../../../page-template/section-props'

export interface BlogSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  variation?: string
  // Blog property us injected by page-template.tsx
}

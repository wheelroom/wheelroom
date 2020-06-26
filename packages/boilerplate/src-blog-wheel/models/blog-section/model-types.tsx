import { CoreSectionProps } from '../../../src-core'
import { BlogModelProps, AllBlogModelProps } from '../blog/model-types'

export interface InjectedBlogSectionProps {
  blog: BlogModelProps
  allBlog: AllBlogModelProps
}

export interface BlogSectionProps
  extends CoreSectionProps,
    InjectedBlogSectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  variation?: string
  // Blog property us injected by page-template.tsx
}

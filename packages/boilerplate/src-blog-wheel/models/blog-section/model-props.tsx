import { CoreSectionProps } from '../../../src-core'
import { BlogModelProps, AllBlogModelProps } from '../blog/model-props'

export interface InjectedBlogSectionModelProps {
  blog: BlogModelProps
  allBlog: AllBlogModelProps
}

export interface BlogSectionModelProps
  extends CoreSectionProps,
    InjectedBlogSectionModelProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  variation?: string
  // Blog property us injected by page-template.tsx
}

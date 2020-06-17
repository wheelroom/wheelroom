import { CoreSectionProps } from '../../../src-core'
import { BlogProps, AllBlogProps } from '../blog/model-types'

export interface InjectedBlogSectionProps {
  blog: BlogProps
  allBlog: AllBlogProps
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

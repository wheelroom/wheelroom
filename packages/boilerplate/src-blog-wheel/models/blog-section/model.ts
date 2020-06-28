import { CoreSectionProps } from '../../../src-core'
import { BlogModel, AllBlogModel } from '../blog/model'

export interface InjectedBlogSectionModel {
  blog: BlogModel
  allBlog: AllBlogModel
}

export interface BlogSectionModel
  extends CoreSectionProps,
    InjectedBlogSectionModel {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  variation?: string
  // Blog property us injected by page-template.tsx
}

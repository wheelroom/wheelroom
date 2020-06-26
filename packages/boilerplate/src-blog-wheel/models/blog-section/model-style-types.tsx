import { NcssNode } from '../../../src-core'
import { BlogSectionBlogVariationStyle } from './blog/blog'
import { BlogSectionListVariationStyle } from './list/list'

export interface BlogSectionModelNcssTree {
  container: NcssNode
  blog: BlogSectionBlogVariationStyle | BlogSectionListVariationStyle
  wrapper: NcssNode
}

export interface BlogSectionBlogModelNcssTree {
  container: NcssNode
  blog: BlogSectionBlogVariationStyle
  wrapper: NcssNode
}

export interface BlogSectionListModelNcssTree {
  container: NcssNode
  blog: BlogSectionListVariationStyle
  wrapper: NcssNode
}

import { NcssObjectProps } from '../../../src-core'
import { BlogSectionBlogVariationStyle } from './blog/blog'
import { BlogSectionListVariationStyle } from './list/list'

export interface BlogSectionModelNcssTree {
  container: NcssObjectProps
  blog: BlogSectionBlogVariationStyle | BlogSectionListVariationStyle
  wrapper: NcssObjectProps
}

export interface BlogSectionBlogModelNcssTree {
  container: NcssObjectProps
  blog: BlogSectionBlogVariationStyle
  wrapper: NcssObjectProps
}

export interface BlogSectionListModelNcssTree {
  container: NcssObjectProps
  blog: BlogSectionListVariationStyle
  wrapper: NcssObjectProps
}

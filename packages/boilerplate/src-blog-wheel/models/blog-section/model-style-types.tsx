import { GridElementStyle } from '../../../src-core'
import { BlogSectionBlogVariationStyle } from './blog/blog'
import { BlogSectionListVariationStyle } from './list/list'

export interface BlogSectionModelStyle {
  container: GridElementStyle
  section: BlogSectionBlogVariationStyle | BlogSectionListVariationStyle
  wrapper: GridElementStyle
}

export interface BlogSectionBlogModelStyle {
  container: GridElementStyle
  section: BlogSectionBlogVariationStyle
  wrapper: GridElementStyle
}

export interface BlogSectionListModelStyle {
  container: GridElementStyle
  section: BlogSectionListVariationStyle
  wrapper: GridElementStyle
}

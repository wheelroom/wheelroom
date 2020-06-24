import { NcssObjectProps } from '../../../src-core'
import { BlogSectionBlogVariationStyle } from './blog/blog'
import { BlogSectionListVariationStyle } from './list/list'

export interface BlogSectionModelStyle {
  container: NcssObjectProps
  section: BlogSectionBlogVariationStyle | BlogSectionListVariationStyle
  wrapper: NcssObjectProps
}

export interface BlogSectionBlogModelStyle {
  container: NcssObjectProps
  section: BlogSectionBlogVariationStyle
  wrapper: NcssObjectProps
}

export interface BlogSectionListModelStyle {
  container: NcssObjectProps
  section: BlogSectionListVariationStyle
  wrapper: NcssObjectProps
}

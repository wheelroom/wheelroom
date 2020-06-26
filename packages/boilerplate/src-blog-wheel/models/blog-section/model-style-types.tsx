import { NcssNode } from '../../../src-core'
import { BlogSectionBlogVariationNcssTree } from './blog/model-ncss'
import { BlogSectionListVariationNcssTree } from './list/model-ncss'

export interface BlogSectionModelNcssTree {
  container: NcssNode
  blog: BlogSectionBlogVariationNcssTree | BlogSectionListVariationNcssTree
  wrapper: NcssNode
}

export interface BlogSectionBlogModelNcssTree {
  container: NcssNode
  blog: BlogSectionBlogVariationNcssTree
  wrapper: NcssNode
}

export interface BlogSectionListModelNcssTree {
  container: NcssNode
  blog: BlogSectionListVariationNcssTree
  wrapper: NcssNode
}



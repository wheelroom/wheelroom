import { NcssNode } from '../../../src-core'
import { BlogSectionBlogVariationNcssTree } from './blog/model-ncss-tree'
import { BlogSectionListVariationNcssTree } from './list/model-ncss-tree'

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

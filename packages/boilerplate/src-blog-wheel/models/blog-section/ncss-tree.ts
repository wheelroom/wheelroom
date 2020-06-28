import { NcssNode } from '../../../src-core'
import { BlogSectionBlogVariationNcssTree } from './blog/ncss-tree'
import { BlogSectionListVariationNcssTree } from './list/ncss-tree'

export interface BlogSectionNcssTree {
  container: NcssNode
  blog: BlogSectionBlogVariationNcssTree | BlogSectionListVariationNcssTree
  wrapper: NcssNode
}

export interface BlogSectionBlogNcssTree {
  container: NcssNode
  blog: BlogSectionBlogVariationNcssTree
  wrapper: NcssNode
}

export interface BlogSectionListNcssTree {
  container: NcssNode
  blog: BlogSectionListVariationNcssTree
  wrapper: NcssNode
}

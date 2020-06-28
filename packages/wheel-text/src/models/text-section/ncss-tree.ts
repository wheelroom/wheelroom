import { NcssNode } from '@wheelroom/core'
import { NcssTree } from './rich-text/ncss-tree'

export interface TextSectionNcssTree {
  container: NcssNode
  richText: NcssTree
  wrapper: NcssNode
}

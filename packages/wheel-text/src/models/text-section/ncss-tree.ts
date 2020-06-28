import { NcssNode } from '@wheelroom/core'
import { RichTextNcssTree } from './rich-text/ncss-tree'

export interface TextSectionNcssTree {
  container: NcssNode
  richText: RichTextNcssTree
  wrapper: NcssNode
}

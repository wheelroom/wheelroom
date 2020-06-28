import { NcssNode } from '../../../src-core'
import { RichTextNcssTree } from './rich-text/rich-text-ncss-tree'

export interface TextSectionModelNcssTree {
  container: NcssNode
  richText: RichTextNcssTree
  wrapper: NcssNode
}

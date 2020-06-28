import { NcssNode } from '../../../src-core'
import { NcssTree } from './rich-text/ncss-tree'

export interface TextSectionNcssTree {
  container: NcssNode
  richText: NcssTree
  wrapper: NcssNode
}

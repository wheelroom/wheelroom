import { NcssNode } from '@wheelroom/core'
import { DocSectionDocVariationNcssTree } from '../doc/ncss-tree'

export interface DocSectionNcssTree {
  container: NcssNode
  doc: DocSectionDocVariationNcssTree
  wrapper: NcssNode
}

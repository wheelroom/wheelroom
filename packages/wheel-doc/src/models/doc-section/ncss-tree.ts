import { NcssNode } from '@wheelroom/core'
import { DocSectionDocVariationNcssTree } from '../doc/ncss-tree'

export interface DocSectionDocNcssTree {
  container: NcssNode
  doc: DocSectionDocVariationNcssTree
  wrapper: NcssNode
}

import { NcssNode } from '@wheelroom/core'
import { DocsSectionDocsVariationNcssTree } from '../docs/ncss-tree'

export interface DocsSectionDocsNcssTree {
  container: NcssNode
  docs: DocsSectionDocsVariationNcssTree
  wrapper: NcssNode
}

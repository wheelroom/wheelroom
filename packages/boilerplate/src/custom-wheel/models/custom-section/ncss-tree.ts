import { NcssNode } from '@wheelroom/core'
import { CustomNcssTree } from '../custom/ncss-tree'

export interface CustomSectionNcssTree extends NcssNode {
  container: NcssNode
  section: CustomNcssTree
  wrapper: NcssNode
}

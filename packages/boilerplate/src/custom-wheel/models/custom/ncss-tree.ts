import { NcssNode, ImageElementNcssTree } from '@wheelroom/core'

export interface CustomNcssTree extends NcssNode {
  label: NcssNode
  heading: NcssNode
  abstract: NcssNode
  image: ImageElementNcssTree
}

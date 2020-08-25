import { NcssNode } from '@wheelroom/core'
import { RichTextNcssTree } from '@wheelroom/wheel-text'

export interface DocSectionDocVariationNcssTree extends NcssNode {
  header: NcssNode
  heading: NcssNode
  richText: RichTextNcssTree
}

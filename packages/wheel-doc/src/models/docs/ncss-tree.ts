import { NcssNode, ActionNcssTree } from '@wheelroom/core'
import { RichTextNcssTree } from '@wheelroom/wheel-text'

export interface DocsSectionDocsVariationNcssTree extends NcssNode {
  breadcrumb: NcssNode
  breadcrumbAction: ActionNcssTree
  breadcrumbCurrent: NcssNode
  breadcrumbSpacer: NcssNode
  header: NcssNode
  heading: NcssNode
  richText: RichTextNcssTree
}

import { ActionNcssTree, NcssNode, Ncss } from '@wheelroom/core'
import { TopicNcssTree } from '@wheelroom/wheel-topic'

export interface TableRowNcssTree extends NcssNode {
  tableElement: NcssNode
  ncssSwitch: Record<
    'headerVariation' | 'bodyVariation' | 'footerVariation',
    Ncss
  >
  th: NcssNode
  dd: NcssNode
  dl: NcssNode
  dt: NcssNode
  icon: NcssNode
  actionGroup: NcssNode
  action: ActionNcssTree
  td: NcssNode
  topic: TopicNcssTree
}

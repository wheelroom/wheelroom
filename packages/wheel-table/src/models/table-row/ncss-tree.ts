import { ActionNcssTree, NcssNode, Ncss } from '../../../src-core'
import { TopicNcssTree } from '../../../src-topic-wheel'

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

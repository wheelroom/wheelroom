import { ActionModelNcssTree, NcssNode, Ncss } from '../../../src-core'
import { TopicModelNcssTree } from '../../../src-topic-wheel'

export interface TableRowModelNcssTree {
  th: NcssNode
  ncssSwitch: Record<
    'headerVariation' | 'bodyVariation' | 'footerVariation',
    Ncss
  >
  dd: NcssNode
  dl: NcssNode
  dt: NcssNode
  icon: NcssNode
  actionGroup: NcssNode
  action: ActionModelNcssTree
  cell: NcssNode
  topic: TopicModelNcssTree
}

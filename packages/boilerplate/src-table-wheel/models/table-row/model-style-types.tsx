import { ActionModelNcssTree, NcssObjectProps, NcssProps } from '../../../src-core'
import { TopicModelNcssTree } from '../../../src-topic-wheel'

export interface TableRowModelNcssTree {
  th: NcssObjectProps
  ncssSwitch: Record<
    'headerVariation' | 'bodyVariation' | 'footerVariation',
    NcssProps
  >
  dd: NcssObjectProps
  dl: NcssObjectProps
  dt: NcssObjectProps
  icon: NcssObjectProps
  actionGroup: NcssObjectProps
  action: ActionModelNcssTree
  cell: NcssObjectProps
  topic: TopicModelNcssTree
}

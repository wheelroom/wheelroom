import { ActionModelStyle, NcssObjectProps, NcssProps } from '../../../src-core'
import { TopicModelStyle } from '../../../src-topic-wheel'

export interface TableRowModelStyle {
  th: NcssObjectProps
  ncssSwitch: Record<'trHeader' | 'trBody' | 'trFooter', NcssProps>
  dd?: NcssObjectProps
  dl?: NcssObjectProps
  dt?: NcssObjectProps
  icon?: NcssObjectProps
  actionGroup?: NcssObjectProps
  action: ActionModelStyle
  cell?: NcssObjectProps
  topic: TopicModelStyle
}

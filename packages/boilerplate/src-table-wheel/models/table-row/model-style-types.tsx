import { ActionModelStyle, NcssObjectProps } from '../../../src-core'
import { TopicModelStyle } from '../../../src-topic-wheel'

export interface TableRowModelStyle {
  th: NcssObjectProps
  ncssSwitch: {
    trHeader?: NcssObjectProps
    trBody?: NcssObjectProps
    trFooter?: NcssObjectProps
  }
  dd?: NcssObjectProps
  dl?: NcssObjectProps
  dt?: NcssObjectProps
  icon?: NcssObjectProps
  actionGroup?: NcssObjectProps
  action: ActionModelStyle
  cell?: NcssObjectProps
  topic: TopicModelStyle
}

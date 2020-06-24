import {
  ActionModelStyle,
  DescriptionListElementStyle,
  IconElementStyle,
  NcssProps,
  TableElementStyle,
} from '../../../src-core'
import { TopicWheelStyle } from '../../../src-topic-wheel'

export interface TableRowModelStyle {
  th: TableElementStyle
  ncssSwitch: {
    trHeader?: NcssProps
    trBody?: NcssProps
    trFooter?: NcssProps
  }
  dd?: DescriptionListElementStyle
  dl?: DescriptionListElementStyle
  dt?: DescriptionListElementStyle
  icon?: IconElementStyle
  actionGroup?: NcssProps
  action: ActionModelStyle
  cell?: NcssProps
  topic: TopicWheelStyle
}

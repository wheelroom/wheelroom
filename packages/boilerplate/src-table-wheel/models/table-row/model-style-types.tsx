import {
  ActionModelStyle,
  DescriptionListElementStyle,
  NcssObjectProps,
  NcssProps,
  TableElementStyle,
} from '../../../src-core'
import { TopicModelStyle } from '../../../src-topic-wheel'

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
  icon?: NcssObjectProps
  actionGroup?: NcssProps
  action: ActionModelStyle
  cell?: NcssProps
  topic: TopicModelStyle
}

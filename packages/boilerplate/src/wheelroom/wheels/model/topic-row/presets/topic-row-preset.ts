import { TableElementStyle } from '../../../element/resets/self-table-reset'
import { DescriptionListElementStyle } from '../../../element/resets/self-dl-reset'
import { NcssProps } from '../../../types'
import {
  topicRowCellPreset,
  TopicRowCellWheelStyle,
} from './topic-row-cell-preset'

export interface TopicRowWheelStyle {
  ncss: NcssProps
  th: TableElementStyle
  dd: DescriptionListElementStyle
  dl: DescriptionListElementStyle
  dt: DescriptionListElementStyle
  cell: TopicRowCellWheelStyle
}

export const topicRowPreset: TopicRowWheelStyle = {
  ncss: {
    label: 'topic-row',
  },
  th: {
    ncss: {
      label: 'topic-row-header-cell',
    },
  },
  dd: {
    ncss: {
      label: 'topic-row-description-definition',
    },
  },
  dl: {
    ncss: {
      label: 'topic-row-description-list',
    },
  },
  dt: {
    ncss: {
      label: 'topic-row-description-term',
    },
  },
  cell: topicRowCellPreset,
}

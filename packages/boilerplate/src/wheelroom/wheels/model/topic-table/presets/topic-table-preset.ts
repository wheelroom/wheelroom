import { NcssProps } from '../../../types'
import { TableElementStyle } from '../../../element/resets/self-table-reset'
import { DescriptionListElementStyle } from '../../../element/resets/self-dl-reset'
import {
  topicRowPreset,
  TopicRowWheelStyle,
} from '../../topic-row/presets/topic-row-preset'

export interface TopicTableWheelStyle {
  ncss: NcssProps
  th: TableElementStyle
  tr: TableElementStyle
  dd: DescriptionListElementStyle
  dl: DescriptionListElementStyle
  dt: DescriptionListElementStyle
  row: TopicRowWheelStyle
}

export const topicTablePreset: TopicTableWheelStyle = {
  ncss: {
    label: 'topic-table',
  },
  th: {
    ncss: {
      label: 'topic-table-head',
    },
  },
  tr: {
    ncss: {
      label: 'topic-table-row',
    },
  },
  dd: {
    ncss: {
      label: 'topic-table-description-definition',
    },
  },
  dl: {
    ncss: {
      label: 'topic-table-description-list',
    },
  },
  dt: {
    ncss: {
      label: 'topic-table-description-term',
    },
  },
  row: topicRowPreset,
}

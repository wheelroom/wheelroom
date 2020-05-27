import { NcssProps } from '../../../types'
import { DescriptionListElementStyle } from '../../../element/resets/self-dl-reset'
import { IconElementStyle } from '../../../element/resets/icon-reset'
import { TableElementStyle } from '../../../element/resets/self-table-reset'
import {
  topicRowPreset,
  TopicRowWheelStyle,
} from '../../topic-row/presets/topic-row-preset'
import {
  topicTableActionPreset,
  TopicTableActionWheelStyle,
} from './topic-table-action-preset'

export interface TopicTableWheelStyle {
  ncss: NcssProps
  th: TableElementStyle
  tr: TableElementStyle
  dd: DescriptionListElementStyle
  dl: DescriptionListElementStyle
  dt: DescriptionListElementStyle
  icon: IconElementStyle
  actions: {
    ncss: NcssProps
    action: TopicTableActionWheelStyle
  }
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
  icon: {
    ncss: {
      label: 'topic-table-icon',
    },
  },
  actions: {
    ncss: {
      label: 'topic-table-actions',
      mx: -1,
    },
    action: topicTableActionPreset,
  },
  row: topicRowPreset,
}

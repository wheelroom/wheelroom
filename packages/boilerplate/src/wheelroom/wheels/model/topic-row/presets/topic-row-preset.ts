import { NcssProps } from '../../../types'
import { DescriptionListElementStyle } from '../../../element/resets/self-dl-reset'
import { IconElementStyle } from '../../../element/resets/icon-reset'
import { TableElementStyle } from '../../../element/resets/self-table-reset'
import {
  topicRowCellPreset,
  TopicRowCellWheelStyle,
} from './topic-row-cell-preset'
import {
  topicRowActionPreset,
  TopicRowActionWheelStyle,
} from './topic-row-action-preset'

export interface TopicRowWheelStyle {
  ncss: NcssProps
  header: NcssProps
  footer: NcssProps
  th: TableElementStyle
  dd: DescriptionListElementStyle
  dl: DescriptionListElementStyle
  dt: DescriptionListElementStyle
  icon: IconElementStyle
  actions: {
    ncss: NcssProps
    action: TopicRowActionWheelStyle
  }
  cell: TopicRowCellWheelStyle
}

export const topicRowPreset: TopicRowWheelStyle = {
  ncss: {
    label: 'topic-row',
  },
  header: {
    label: 'topic-row-header',
  },
  footer: {
    label: 'topic-row-footer',
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
  icon: {
    ncss: {
      label: 'topic-row-icon',
    },
  },
  actions: {
    ncss: {
      label: 'topic-row-actions',
      mx: -1,
    },
    action: topicRowActionPreset,
  },
  cell: topicRowCellPreset,
}

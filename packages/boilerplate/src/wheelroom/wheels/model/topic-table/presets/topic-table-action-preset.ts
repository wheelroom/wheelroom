import { NcssProps } from '../../../types'

export interface TopicTableActionWheelStyle {
  ncss: NcssProps
  icon: {
    ncss: NcssProps
  }
}

export const topicTableActionPreset: TopicTableActionWheelStyle = {
  ncss: {
    label: 'topic-table-action',
    display: 'inline-flex',
    m: 1,
  },
  icon: {
    ncss: {
      label: 'topic-table-icon',
      w: '15px',
      h: '15px',
      my: 'auto',
      transform: 'translateX(4px)',
    },
  },
}

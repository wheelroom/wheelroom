import { NcssProps } from '../../../types'

export interface TopicRowActionWheelStyle {
  ncss: NcssProps
  icon: {
    ncss: NcssProps
  }
}

export const topicRowActionPreset: TopicRowActionWheelStyle = {
  ncss: {
    label: 'topic-row-action',
    display: 'inline-flex',
    m: 1,
  },
  icon: {
    ncss: {
      label: 'topic-row-icon',
      w: '15px',
      h: '15px',
      my: 'auto',
      transform: 'translateX(4px)',
    },
  },
}

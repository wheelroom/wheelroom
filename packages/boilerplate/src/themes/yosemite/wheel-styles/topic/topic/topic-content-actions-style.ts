import { TopicContentActionsWheelStyle } from '../../../../../../src-topic-wheel/models/topic/presets/topic-content-actions-preset'

export const topicContentActionsStyle: TopicContentActionsWheelStyle = {
  ncss: {
    label: 'topic-actions',
    mx: -1,
  },
  link: {
    ncss: {
      label: 'topic-link',
      m: 1,
    },
    icon: {
      ncss: {
        label: 'topic-icon',
        w: '15px',
        h: '15px',
        my: 'auto',
        transform: 'translateX(4px)',
      },
    },
  },
}

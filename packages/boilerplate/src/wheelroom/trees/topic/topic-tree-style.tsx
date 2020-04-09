import { NcssProps } from '../../elements/types'
import { topicMediaStyle } from './topic-media-style'
import { topicContentStyle } from './topic-content-style'

export interface TopicTreeStyle {
  /** Styling for this node */
  ncss?: NcssProps
  /** Wrapper around media */
  media?: {
    ncss?: NcssProps
  }
  content?: {
    ncss?: NcssProps
  }
}

export const topicTreeStyle: TopicTreeStyle = {
  ncss: {
    display: 'flex',
  },
  media: {
    ...topicMediaStyle,
  },
  content: {
    ...topicContentStyle,
  },
}

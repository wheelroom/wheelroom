import { NcssProps } from '../../elements/types'

export interface TopicMediaTreeStyle {
  /** Styling for this node */
  ncss?: NcssProps
  /** Image style */
  image?: {
    ncss?: NcssProps
  }
  /** Video style */
  video?: {
    ncss?: NcssProps
  }
}

export const topicMediaStyle: TopicMediaTreeStyle = {
  ncss: {},
  image: {
    ncss: {},
  },
  video: {
    ncss: {},
  },
}

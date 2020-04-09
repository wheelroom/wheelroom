import { NcssProps } from '../../elements/types'
import { ImageTreeStyle } from '../../elements/image'
import { VideoTreeStyle } from '../../elements/video'

export interface TopicMediaTreeStyle {
  /** Styling for this node */
  ncss?: NcssProps
  /** Image style */
  image?: ImageTreeStyle
  /** Video style */
  video?: VideoTreeStyle
}

export const topicMediaStyle: TopicMediaTreeStyle = {
  ncss: {},
}

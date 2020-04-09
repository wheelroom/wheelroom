import { NcssProps } from '../../elements/types'
import { ImageTreeStyle } from '../../elements/image'
import { VideoTreeStyle } from '../../elements/video'

export interface TopicMediaTreeStyle {
  ncss?: NcssProps
  image?: ImageTreeStyle
  video?: VideoTreeStyle
}

export const topicMediaStyle: TopicMediaTreeStyle = {}

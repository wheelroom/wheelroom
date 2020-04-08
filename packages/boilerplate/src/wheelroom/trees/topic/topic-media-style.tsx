import { NcssProps } from '../../elements/types'
import { ImageTreeStyle } from '../../elements/image'
import { VideoTreeStyle } from '../../elements/video'

export interface TopicMediaTreeStyle {
  wrapper?: NcssProps
  image?: ImageTreeStyle
  video?: VideoTreeStyle
}

export const topicMediaStyle: TopicMediaTreeStyle = {
  wrapper: {
    justifyContent: 'center',
  },
}

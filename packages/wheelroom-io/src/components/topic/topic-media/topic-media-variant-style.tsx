import { mediaQuery } from '../../../lib/media-query'
import { TopicMediaVariant } from './topic-media-variants'

export interface GetTopicVariantStyle {
  variant?: TopicMediaVariant
}

const baseStyle = {
  label: 'topic-media',
}

export const topicMediaVariantStyle = (args: GetTopicVariantStyle) => {
  let style = {}
  switch (args.variant) {
    case 'myVar':
      style = {
        ...baseStyle,
      }
      break
    default:
      style = baseStyle
      break
  }
  return mediaQuery(style)
}

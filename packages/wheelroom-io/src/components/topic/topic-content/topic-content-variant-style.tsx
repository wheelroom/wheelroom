import { mediaQuery } from '../../../lib/media-query'
import { TopicContentVariant } from './topic-content-variants'

export interface GetTopicVariantStyle {
  variant?: TopicContentVariant
}

const baseStyle = {
  label: 'topic-actions',
}

export const topicContentVariantStyle = (args: GetTopicVariantStyle) => {
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

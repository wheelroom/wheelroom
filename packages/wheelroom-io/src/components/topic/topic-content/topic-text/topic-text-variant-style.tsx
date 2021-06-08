import { mediaQuery } from '../../../../lib/media-query'
import { TopicTextVariant } from './topic-text-variants'

export interface TopicVariantStyle {
  variant?: TopicTextVariant
}

const baseStyle = {
  label: 'topic-text',
}

export const topicTextVariantStyle = (args: TopicVariantStyle) => {
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

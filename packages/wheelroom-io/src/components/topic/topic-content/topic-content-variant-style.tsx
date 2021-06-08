import { mediaQuery } from '../../../lib/media-query'
import { TopicVariant } from '../topic-variants'

export interface TopicVariantStyle {
  variant?: TopicVariant
}

const baseStyle = {
  label: 'topic-content',
}

export const topicContentVariantStyle = (args: TopicVariantStyle) => {
  let style = {}
  switch (args.variant) {
    case 'block':
      style = {
        ...baseStyle,
        padding: '16px',
      }
      break
    default:
      style = baseStyle
      break
  }
  return mediaQuery(style)
}

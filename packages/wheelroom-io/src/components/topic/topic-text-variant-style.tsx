import { mediaQuery } from '../../lib/media-query'
import { TopicVariant } from './topic-variants'

export interface TopicVariantStyle {
  variant?: TopicVariant
}

const baseStyle = {
  label: 'topic-text',
}

export const topicTextVariantStyle = (args: TopicVariantStyle) => {
  let style = {}
  switch (args.variant) {
    case 'block':
      style = {
        ...baseStyle,
        flex: '1 1 auto',
        p: {
          marginBottom: 0,
        },
      }
      break
    default:
      style = baseStyle
      break
  }
  return mediaQuery(style)
}

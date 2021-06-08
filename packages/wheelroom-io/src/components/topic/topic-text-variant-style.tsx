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
    case 'card':
      style = {
        ...baseStyle,
        display: 'block',
        flex: '1 1 auto',
        p: {
          marginBottom: 0,
        },
      }
      break
    case 'headline':
      style = {
        ...baseStyle,
        p: {
          fontSize: ['20px', '20px', '24px', '24px'],
        },
      }
      break
    default:
      style = baseStyle
      break
  }
  return mediaQuery(style)
}

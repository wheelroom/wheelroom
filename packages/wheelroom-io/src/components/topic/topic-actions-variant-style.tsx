import { mediaQuery } from '../../lib/media-query'
import { TopicVariant } from './topic-variants'

export interface TopicVariantStyle {
  variant?: TopicVariant
}

const baseStyle = {
  label: 'topic-actions',
}

export const topicActionsVariantStyle = (args: TopicVariantStyle) => {
  let style = {}
  switch (args.variant) {
    case 'block':
      style = {
        ...baseStyle,
        flex: '0',
        marginTop: '16px',
      }
      break
    case 'card':
      style = {
        ...baseStyle,
        marginTop: '16px',
      }
      break
    case 'headline':
      style = {
        ...baseStyle,
        marginTop: '16px',
      }
      break
    default:
      style = baseStyle
      break
  }
  return mediaQuery(style)
}

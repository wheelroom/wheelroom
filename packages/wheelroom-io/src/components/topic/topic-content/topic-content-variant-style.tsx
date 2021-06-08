import { mediaQuery } from '../../../lib/media-query'
import { TopicVariant } from '../topic-variants'

export interface TopicVariantStyle {
  variant?: TopicVariant
}

const baseStyle = {
  label: 'topic-content',
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
  ':only-of-type': {},
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

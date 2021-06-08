import { mediaQuery } from '../../lib/media-query'
import { TopicVariant } from './topic-variants'

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
    case 'headline':
      style = {
        textAlign: 'center',
        margin: '0 auto',
        padding: '16px 32px',
        maxWidth: ['100%', '48em'],
      }
      break
    default:
      style = baseStyle
      break
  }
  return mediaQuery(style)
}

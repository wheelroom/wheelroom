import { mediaQuery } from '../../lib/media-query'
import { TopicVariant } from './topic-variants'

export interface TopicVariantStyle {
  variant?: TopicVariant
}

const baseStyle = {
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
    case 'card':
      style = {
        ...baseStyle,
        flex: '1 1 auto',
        color: 'grey',
        padding: '16px',
      }
      break
    case 'featured':
      style = {
        padding: '16px',
        maxWidth: ['35em', '35em', '45%'],
        width: '100',
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
    case 'gallery':
      style = {
        padding: '16px',
      }
      break
    default:
      style = baseStyle
      break
  }
  return mediaQuery(style)
}

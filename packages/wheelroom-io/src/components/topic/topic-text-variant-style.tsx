import { mediaQuery } from '../../lib/media-query'
import { TopicVariant } from './topic-variants'

export interface TopicVariantStyle {
  variant?: TopicVariant
}

export const topicTextVariantStyle = (args: TopicVariantStyle) => {
  let style = {}
  switch (args.variant) {
    case 'block':
      style = {
        flex: '1 1 auto',
        p: {
          marginBottom: 0,
        },
      }
      break
    case 'card':
      style = {
        display: 'block',
        flex: '1 1 auto',
        p: {
          marginBottom: 0,
        },
      }
      break
    case 'featured':
      style = {
        p: {
          marginBottom: 0,
        },
      }
      break
    case 'headline':
      style = {
        p: {
          fontSize: ['20px', '20px', '24px', '24px'],
        },
      }
      break
    default:
      break
  }
  return mediaQuery(style)
}

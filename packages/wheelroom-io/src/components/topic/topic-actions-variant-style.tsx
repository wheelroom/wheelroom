import { mediaQuery } from '../../lib/media-query'
import { TopicVariant } from './topic-variants'

export interface TopicVariantStyle {
  variant?: TopicVariant
}

export const topicActionsVariantStyle = (args: TopicVariantStyle) => {
  let style = {}
  switch (args.variant) {
    case 'block':
      style = {
        flex: '0',
        marginTop: '16px',
      }
      break
    case 'card':
      style = {
        marginTop: '16px',
      }
      break
    case 'featured':
      style = {
        marginTop: ['24px', '24px', '32px'],
      }
      break
    case 'headline':
      style = {
        marginTop: '16px',
      }
      break
    default:
      break
  }
  return mediaQuery(style)
}

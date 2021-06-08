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
    case 'hero':
      style = {
        maxWidth: '30em',
        p: {
          fontSize: ['20px', '20px', '24px', '24px'],
          mb: 0,
        },
      }
      break
    case 'quote':
      style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: {
          order: '2',
          fontSize: ['24px', '32px', '42px'],
          fontStyle: 'italic',
          lineHeight: 1.25,
          margin: 0,
          padding: 0,
        },
        h1: {
          order: '1',
        },
      }
      break
    case 'showcase':
      style = {
        p: {
          marginBottom: 0,
        },
      }
      break
    default:
      break
  }
  return mediaQuery(style)
}

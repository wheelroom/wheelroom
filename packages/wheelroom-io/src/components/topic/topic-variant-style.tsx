import { mediaQuery } from '../../lib/media-query'
import { TopicVariant } from './topic-variants'

export interface GetTopicVariantStyle {
  variant: TopicVariant
}

// 1:4, 2:8, 3:16, 4:24, 5:32, 6:40, 7:48, 8:60, 9: 72, 10:84

const baseStyle = {
  label: 'topic',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}

export const topicVariantStyle = (args: GetTopicVariantStyle) => {
  let style = {}
  switch (args.variant) {
    case 'block':
      style = {
        ...baseStyle,
        padding: '16px',
        width: ['100%', '50%', '33.33%'],
        maxWidth: '35em',
      }
      break
    case 'card':
      style = {
        ...baseStyle,
        borderColor: 'cardBorder',
        boxShadow: '0 0 16px',
        color: 'cardShadow',
        textDecoration: 'none',
        transition: 'transform .25s ease',
        ':hover': {
          transform: 'translate3d(0, -4px, 0)',
        },
      }
      break
    case 'divider':
      style = {
        margin: '0 1rem',
        color: 'inherit',
        backgroundColor: 'dividerBg',
        border: 0,
        opacity: '0.25',
        h: '1px',
      }
      break
    case 'featured':
      style = {
        flexDirection: ['column', 'column', 'row'],
        justifyContent: 'space-evenly',
        padding: '0 16x',
        alignItems: 'center',
      }
      break
    case 'gallery':
      style = {
        width: '50%',
      }
      break
    case 'hero':
      style = {
        position: 'relative',
      }
      break
    case 'showcase':
      style = {
        flexDirection: ['column', 'row'],
        padding: '0 16px',
      }
      break
    default:
      style = baseStyle
      break
  }
  return mediaQuery(style)
}

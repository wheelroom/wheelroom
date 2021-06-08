import { mediaQuery } from '../../lib/media-query'
import { TopicVariant } from './topic-variants'

export interface TopicVariantStyle {
  variant?: TopicVariant
}

// spaceScale: [0, 1:4, 2:8, 3:16, 4:24, 5:32, 6:40, 7:48, 8:56, 9:64, 10:72, 11:80, 12:88, 13:96],
// fontSizeScale: [0, 1:8, 2:10, 3:12, 4:14, 5:16, 6:18, 7:20, 8:24, 9:32, 10:42, 11:56, 12:72]

const baseStyle = {
  label: 'topic',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}

export const topicVariantStyle = (args: TopicVariantStyle) => {
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
        margin: '1rem 0',
        color: 'inherit',
        backgroundColor: 'grey',
        border: 0,
        opacity: '0.25',
        height: '1px',
      }
      break
    case 'featured':
      style = {
        flexDirection: ['column', 'column', 'row'],
        justifyContent: 'space-evenly',
        padding: '16x 0',
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
        padding: '16px 0',
      }
      break
    default:
      style = baseStyle
      break
  }
  return mediaQuery(style)
}

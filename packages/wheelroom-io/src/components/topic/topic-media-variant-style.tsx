import { mediaQuery } from '../../lib/media-query'
import { TopicVariant } from './topic-variants'

export interface TopicVariantStyle {
  variant?: TopicVariant
}

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  ':only-of-type': {},
}

export const topicMediaVariantStyle = (args: TopicVariantStyle) => {
  let style = {}
  switch (args.variant) {
    case 'block':
      style = {
        ...baseStyle,
        picture: {
          display: 'block',
          height: '0px',
          paddingBottom: '56.25%',
          position: 'relative',
          img: {
            display: 'block',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            width: '100%',
          },
        },
      }
      break
    case 'card':
      style = {
        ...baseStyle,
        margin: '16px',
        picture: {
          display: 'block',
          height: '178px',
          img: {
            display: 'block',
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          },
        },
      }
      break
    case 'featured':
      style = {
        ...baseStyle,
        padding: '16px',
        maxWidth: ['35em', '35em', '45%'],
        width: '100%',
        picture: {
          img: {
            display: 'block',
            height: 'auto',
            width: '100%',
          },
        },
      }
      break
    case 'gallery':
      style = {
        ...baseStyle,
        picture: {
          padding: '16px',
          img: {
            display: 'block',
            height: 'auto',
            width: '100%',
          },
        },
      }
      break
    case 'hero':
      style = {
        ...baseStyle,
        bottom: '0',
        left: '0',
        position: 'absolute',
        right: '0',
        top: '0',
        overflow: 'hidden',
        zIndex: -1,
        picture: {
          img: {
            objectFit: 'cover',
            display: 'block',
            height: 'auto',
            width: '100%',
          },
        },
      }
      break
    case 'quote':
      style = {
        ...baseStyle,
        padding: '16px',
        picture: {
          overflow: 'hidden',
          height: '200px',
          width: '200px',
          borderRadius: '100px',
          margin: '0 auto',
          img: {
            display: 'block',
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          },
        },
      }
      break
    case 'showcase':
      style = {
        ...baseStyle,
        padding: '16px',
        maxWidth: '254px',
        width: '100%',
        picture: {
          img: {
            display: 'block',
            height: '100%',
            width: '100%',
          },
        },
      }
      break
    default:
      style = {
        ...baseStyle,
        picture: {
          img: {
            display: 'block',
            height: '100%',
            width: '100%',
          },
        },
      }
      break
  }
  return mediaQuery(style)
}

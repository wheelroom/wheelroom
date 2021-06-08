import { mediaQuery } from '../../lib/media-query'
import { TopicVariant } from './topic-variants'

export interface TopicVariantStyle {
  variant?: TopicVariant
}

const baseStyle = {
  label: 'topic-media',
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
    default:
      style = {
        ...baseStyle,
        picture: {
          img: {
            display: 'block',
            height: 'auto',
            width: '100%',
          },
        },
      }
      break
  }
  return mediaQuery(style)
}

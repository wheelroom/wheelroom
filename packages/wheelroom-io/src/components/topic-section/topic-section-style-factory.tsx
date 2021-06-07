import { Variant } from '../topic/topic'
import { mediaQuery } from '../../lib/media-query'

export interface TopicSectionStyleFactory {
  variant: Variant
}

const baseStyle = {
  display: 'flex',
  width: '100%',
  label: 'topicSection',
  flexDirection: 'column',
}
const maxWidthStyle = {
  ...baseStyle,
  maxWidth: '1280px',
  marginLeft: 'auto',
  marginRight: 'auto',
}

export const topicSectionStyleFactory = (args: TopicSectionStyleFactory) => {
  let style = {}
  switch (args.variant) {
    case 'block':
      style = {
        ...maxWidthStyle,
        alignItems: ['center', 'initial'],
        flexDirection: ['column', 'row'],
        flexWrap: 'wrap',
      }
      break
    case 'card':
      style = {
        ...maxWidthStyle,
        alignItems: 'stretch',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }
      break
    case 'divider':
      style = {
        ...maxWidthStyle,
        my: '1rem',
        color: 'inherit',
        backgroundColor: 'dividerBg',
        border: 0,
        opacity: '0.25',
        h: '1px',
      }
      break
    case 'gallery':
      style = {
        ...maxWidthStyle,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
      }
      break
    case 'hero':
      style = baseStyle
      break
    case 'image':
      style = {
        ...maxWidthStyle,
        flexDirection: ['column', 'row'],
      }
      break
    case 'showcase':
      style = {
        ...maxWidthStyle,
        alignItems: ['center', 'baseline'],
        justifyContent: 'center',
        maxWidth: ['35em', '54rem'],
      }
      break
    default:
      style = maxWidthStyle
      break
  }
  return mediaQuery(style)
}

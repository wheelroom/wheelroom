import { mediaQuery } from '../../lib/media-query'
import { MediaVariant } from './media-variants'

export interface VariantStyle {
  variant?: MediaVariant
}

const baseStyle = {
  label: 'topic-media',
}

export const mediaVariantStyle = (args: VariantStyle) => {
  let style = {}
  switch (args.variant) {
    case 'myVar':
      style = {
        ...baseStyle,
      }
      break
    default:
      style = baseStyle
      break
  }
  return mediaQuery(style)
}

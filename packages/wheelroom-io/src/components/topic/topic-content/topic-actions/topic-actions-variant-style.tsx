import { mediaQuery } from '../../../../lib/media-query'
import { TopicActionsVariant } from './topic-actions-variants'

export interface TopicVariantStyle {
  variant?: TopicActionsVariant
}

const baseStyle = {
  label: 'topic-actions',
}

export const topicActionsVariantStyle = (args: TopicVariantStyle) => {
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

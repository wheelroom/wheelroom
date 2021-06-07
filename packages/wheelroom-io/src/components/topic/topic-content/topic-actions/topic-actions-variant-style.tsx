import { mediaQuery } from '../../../../lib/media-query'
import { TopicActionsVariant } from './topic-actions-variants'

export interface GetTopicVariantStyle {
  variant?: TopicActionsVariant
}

const baseStyle = {
  label: 'topic-actions',
}

export const topicActionsVariantStyle = (args: GetTopicVariantStyle) => {
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

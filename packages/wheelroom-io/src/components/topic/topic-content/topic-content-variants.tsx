import { TopicActionsVariantMap } from './topic-actions/topic-actions-variants'
import { TopicTextVariantMap } from './topic-text/topic-text-variants'

export const topicContentVariants = ['myVar'] as const

export type TopicContentVariant = typeof topicContentVariants[number]

export type TopicContentVariantMap = Partial<
  Record<'topicContent', TopicContentVariant>
> &
  TopicTextVariantMap &
  TopicActionsVariantMap

import { TopicActionsVariantMap } from './topic-content/topic-actions/topic-actions-variants'
import { TopicContentVariantMap } from './topic-content/topic-content-variants'
import { TopicTextVariantMap } from './topic-content/topic-text/topic-text-variants'
import { TopicMediaVariantMap } from './topic-media/topic-media-variants'

export const topicVariants = [
  'block',
  'card',
  'divider',
  'featured',
  'gallery',
  'headline',
  'hero',
  'image',
  'navigation',
  'quote',
  'showcase',
  'text',
  'video',
] as const

export type TopicVariant = typeof topicVariants[number]

export type TopicVariantMap = Record<'topic', TopicVariant> &
  TopicMediaVariantMap &
  TopicContentVariantMap &
  TopicTextVariantMap &
  TopicActionsVariantMap

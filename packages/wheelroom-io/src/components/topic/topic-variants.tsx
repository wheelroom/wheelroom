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

export type TopicVariantMap = Partial<Record<'topic', TopicVariant>>

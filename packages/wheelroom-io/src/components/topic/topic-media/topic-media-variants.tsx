export const topicMediaVariants = ['myVar'] as const

export type TopicMediaVariant = typeof topicMediaVariants[number]
export type TopicMediaVariantMap = Partial<
  Record<'topicMedia', TopicMediaVariant>
>

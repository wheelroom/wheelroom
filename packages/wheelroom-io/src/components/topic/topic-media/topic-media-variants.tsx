export const topicMediaVariants = ['myVar'] as const

export type TopicMediaVariant = typeof topicMediaVariants[number]
export type TopicMediaVariantMap = Record<'topicMedia', TopicMediaVariant>

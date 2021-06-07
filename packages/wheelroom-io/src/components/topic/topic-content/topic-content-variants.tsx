export const topicContentVariants = ['myVar'] as const

export type TopicContentVariant = typeof topicContentVariants[number]
export type TopicContentVariantMap = Record<'topicContent', TopicContentVariant>

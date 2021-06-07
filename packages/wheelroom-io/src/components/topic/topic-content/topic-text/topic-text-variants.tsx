export const topicTextVariants = ['myVar'] as const

export type TopicTextVariant = typeof topicTextVariants[number]
export type TopicTextVariantMap = Record<'topicText', TopicTextVariant>

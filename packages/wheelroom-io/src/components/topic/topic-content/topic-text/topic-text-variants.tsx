export const topicTextVariants = ['myVar'] as const

export type TopicTextVariant = typeof topicTextVariants[number]
export type TopicTextVariantMap = Partial<Record<'topicText', TopicTextVariant>>

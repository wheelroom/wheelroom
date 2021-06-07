export const topicContentVariants = ['myVar'] as const

export type TopicContentVariant = typeof topicContentVariants[number]
export type TopicContentVariantMap = Partial<
  Record<'topicContent', TopicContentVariant>
>

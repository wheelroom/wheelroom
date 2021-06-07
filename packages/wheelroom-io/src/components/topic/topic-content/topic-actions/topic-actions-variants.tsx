export const topicActionsVariants = ['myVar'] as const

export type TopicActionsVariant = typeof topicActionsVariants[number]
export type TopicActionsVariantMap = Record<'topicActions', TopicActionsVariant>

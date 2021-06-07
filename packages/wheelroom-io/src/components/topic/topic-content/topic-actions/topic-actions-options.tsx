export const topicActionsOptions = ['myOption'] as const
export type TopicActionsOption = typeof topicActionsOptions[number]
export type TopicActionsOptions = Partial<Record<TopicActionsOption, boolean>>

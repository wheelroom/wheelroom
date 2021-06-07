export const topicContentOptions = ['myOption'] as const
export type TopicContentOption = typeof topicContentOptions[number]
export type TopicContentOptions = Partial<Record<TopicContentOption, boolean>>

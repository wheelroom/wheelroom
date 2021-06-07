export const topicTextOptions = ['myOption'] as const
export type TopicTextOption = typeof topicTextOptions[number]
export type TopicTextOptions = Partial<Record<TopicTextOption, boolean>>

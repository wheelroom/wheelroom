export const topicMediaOptions = ['myOption'] as const
export type TopicMediaOption = typeof topicMediaOptions[number]
export type TopicMediaOptions = Partial<Record<TopicMediaOption, boolean>>

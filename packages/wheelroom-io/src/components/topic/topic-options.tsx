export const topicOptions = [
  'reversedOrder',
  'hideIcon',
  'hideMedia',
  'hideHeading',
  'hideAbstract',
  'hideAction',
] as const
export type TopicOption = typeof topicOptions[number]
export type TopicOptions = Partial<Record<TopicOption, boolean>>

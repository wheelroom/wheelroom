import { DeepPartial } from '@wheelroom/core'
import { TopicSectionData } from '@wheelroom/wheel-topic'

export const topicData = {
  hideAbstract: false,
  hideActions: false,
  hideContent: false,
  hideHeading: false,
  hideIcon: false,
  hideMedia: false,
  hideText: false,
}

export const topicSectionData: DeepPartial<TopicSectionData> = {
  block: topicData,
  card: topicData,
  divider: topicData,
  featured: topicData,
  gallery: topicData,
  headline: topicData,
  hero: topicData,
  image: topicData,
  quote: topicData,
  showcase: topicData,
  video: topicData,
}

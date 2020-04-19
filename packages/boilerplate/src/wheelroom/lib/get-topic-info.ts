import { TopicProps } from '../../models/topic'

export interface TopicInfo {
  hasAbstract: boolean
  hasAction: boolean
  hasHeading: boolean
  hasIcon: boolean
  hasImage: boolean
  hasVideo: boolean
}

export const getTopicInfo = (topic: TopicProps): TopicInfo => {
  const info = {
    hasAbstract: false,
    hasAction: false,
    hasHeading: false,
    hasIcon: false,
    hasImage: false,
    hasVideo: false,
  } as TopicInfo

  if (topic.heading) {
    info.hasHeading = true
  }
  if (topic.icon) {
    info.hasIcon = true
  }
  if (topic.abstract && topic.abstract.abstract) {
    info.hasAbstract = true
  }
  if (
    topic.actions &&
    Array.isArray(topic.actions) &&
    topic.actions.length > 0
  ) {
    info.hasAction = true
  }
  if (topic.media) {
    const contentType = topic.media.file && topic.media.file.contentType
    if (contentType && contentType.includes('/')) {
      const contentTypeSplit = contentType.split('/')
      if (contentTypeSplit[0] === 'image') {
        info.hasImage = true
      }
      if (contentTypeSplit[0] === 'video') {
        info.hasVideo = true
      }
    }
  }

  return info
}

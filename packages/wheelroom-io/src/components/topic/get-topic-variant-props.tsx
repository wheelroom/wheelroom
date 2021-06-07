import { TopicOptions } from './topic'
import { TopicVariantMap } from './topic-variants'

export interface GetTopicVariantProps {
  sectionIndex: number
  topicIndex: number
  topicOptions: TopicOptions
  variantMap: TopicVariantMap
}

export type TopicVariantProps = {
  fullTopicAsLink: boolean
  useHeadingElement: string
  topicOptions: TopicOptions
}

export const getTopicVariantProps = (args: GetTopicVariantProps) => {
  let useHeadingElement
  let fullTopicAsLink = false
  const topicOptions: TopicOptions = { ...args.topicOptions }

  switch (args.variantMap.topic) {
    case 'card':
      fullTopicAsLink = true
      break
    case 'featured':
      useHeadingElement = args.sectionIndex <= 1 ? 'h1' : 'h2'
      topicOptions.reversedOrder = args.topicOptions.reversedOrder
        ? !(args.topicIndex % 2)
        : !!(args.topicIndex % 2)
      break
    case 'headline':
      useHeadingElement = args.sectionIndex <= 1 ? 'h1' : 'h2'
      break
    case 'hero':
      useHeadingElement = args.sectionIndex <= 1 ? 'h1' : 'h2'
      break
    case 'quote':
      useHeadingElement = 'p'
      break
    case 'showcase':
      useHeadingElement = 'h3'
      break
    default:
      break
  }
  return {
    fullTopicAsLink,
    useHeadingElement,
    topicOptions,
  } as TopicVariantProps
}

import { TopicOptions } from "./topic"
import { TopicVariantMap } from "./topic-variants"

export interface TopicVariantProps {
  sectionIndex: number
  topicIndex: number
  topicOptions: TopicOptions
  variantMap: TopicVariantMap
}

export const topicVariantProps = (args: TopicVariantProps) => {
  let useHeadingElement
  const topicOptions: TopicOptions = { ...args.topicOptions }

  switch (args.variantMap.topic) {
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
  return { useHeadingElement, topicOptions }
}

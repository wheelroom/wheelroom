import { Variant, TopicOptions } from './topic'

export interface TopicPropsFactory {
  sectionIndex: number
  topicIndex: number
  topicOptions: TopicOptions
  variant: Variant
}

export const topicPropsFactory = (args: TopicPropsFactory) => {
  let useHeadingElement
  const topicOptions: TopicOptions = { ...args.topicOptions }

  switch (args.variant) {
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

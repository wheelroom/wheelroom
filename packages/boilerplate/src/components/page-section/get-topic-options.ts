import { TopicOption } from './page-section'

export interface TopicOptions {
  reverseOrder: boolean
  hideIcon: boolean
  hideImage: boolean
  hideHeading: boolean
  hideAbstract: boolean
  hideAction: boolean
}

export const getTopicOptions = (options: TopicOption[]): TopicOptions => {
  const optionsList = options || []
  return {
    reverseOrder: optionsList.includes('Reversed order'),
    hideIcon: optionsList.includes('Hide icon'),
    hideImage: optionsList.includes('Hide image'),
    hideHeading: optionsList.includes('Hide heading'),
    hideAbstract: optionsList.includes('Hide abstract'),
    hideAction: optionsList.includes('Hide action'),
  }
}

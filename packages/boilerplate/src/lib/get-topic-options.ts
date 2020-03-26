export type TopicOptionString =
  | 'Hide icon'
  | 'Hide media'
  | 'Hide heading'
  | 'Hide abstract'
  | 'Hide action'
  | 'Reversed order'

export interface TopicOptions {
  reverseOrder: boolean
  hideIcon: boolean
  hideMedia: boolean
  hideHeading: boolean
  hideAbstract: boolean
  hideAction: boolean
}

export const getTopicOptions = (
  optionStrings: TopicOptionString[],
  language = 'en'
): TopicOptions => {
  const optionsStringList = optionStrings || []

  const defaultResult = {
    reverseOrder: optionsStringList.includes('Reversed order'),
    hideIcon: optionsStringList.includes('Hide icon'),
    hideMedia: optionsStringList.includes('Hide media'),
    hideHeading: optionsStringList.includes('Hide heading'),
    hideAbstract: optionsStringList.includes('Hide abstract'),
    hideAction: optionsStringList.includes('Hide action'),
  }

  if (language === 'en') {
    return defaultResult
  }
  return defaultResult
}

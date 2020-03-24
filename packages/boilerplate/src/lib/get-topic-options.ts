export type TopicOptionString =
  | 'Hide icon'
  | 'Hide image'
  | 'Hide heading'
  | 'Hide abstract'
  | 'Hide action'
  | 'Reversed order'

export interface TopicOptions {
  reverseOrder: boolean
  hideIcon: boolean
  hideImage: boolean
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
    hideImage: optionsStringList.includes('Hide image'),
    hideHeading: optionsStringList.includes('Hide heading'),
    hideAbstract: optionsStringList.includes('Hide abstract'),
    hideAction: optionsStringList.includes('Hide action'),
  }

  if (language === 'en') {
    return defaultResult
  }
  return defaultResult
}

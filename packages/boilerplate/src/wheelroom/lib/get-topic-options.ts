export type TopicOptionString =
  | 'Hide icon'
  | 'Hide media'
  | 'Hide heading'
  | 'Hide abstract'
  | 'Hide action'
  | 'Reversed order'

export type TopicOptionStringNl =
  | 'Verberg icoon'
  | 'Verberg media'
  | 'Verberg titel'
  | 'Verberg tekst'
  | 'Verberg actie'
  | 'Draai volgorde om'

export interface TopicOptions {
  reverseOrder: boolean
  hideIcon: boolean
  hideMedia: boolean
  hideHeading: boolean
  hideAbstract: boolean
  hideAction: boolean
}

export const getTopicOptions = (
  optionStrings: (TopicOptionString | TopicOptionStringNl)[],
  language = 'en'
): TopicOptions => {
  const optionsStringList = optionStrings || []

  const enResult = {
    reverseOrder: optionsStringList.includes('Reversed order'),
    hideIcon: optionsStringList.includes('Hide icon'),
    hideMedia: optionsStringList.includes('Hide media'),
    hideHeading: optionsStringList.includes('Hide heading'),
    hideAbstract: optionsStringList.includes('Hide abstract'),
    hideAction: optionsStringList.includes('Hide action'),
  }
  const nlResult = {
    reverseOrder: optionsStringList.includes('Draai volgorde om'),
    hideIcon: optionsStringList.includes('Verberg icoon'),
    hideMedia: optionsStringList.includes('Verberg media'),
    hideHeading: optionsStringList.includes('Verberg titel'),
    hideAbstract: optionsStringList.includes('Verberg tekst'),
    hideAction: optionsStringList.includes('Verberg actie'),
  }

  if (language === 'en') {
    return enResult
  }
  if (language === 'nl') {
    return nlResult
  }

  return enResult
}

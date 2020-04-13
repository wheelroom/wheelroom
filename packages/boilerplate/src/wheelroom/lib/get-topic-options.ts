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

export type TopicOptionsKeys =
  | 'reverseOrder'
  | 'hideIcon'
  | 'hideMedia'
  | 'hideHeading'
  | 'hideAbstract'
  | 'hideAction'

export type TopicOptions = Partial<Record<TopicOptionsKeys, boolean>>
type TopicOptionsTranslation = Record<TopicOptionsKeys, string>

export const getTopicOptions = (
  optionStrings: (TopicOptionString | TopicOptionStringNl)[],
  overrideTopicOptions: TopicOptions = {},
  locale = 'en'
): TopicOptions => {
  const optionsStringList = optionStrings || []

  const english: TopicOptionsTranslation = {
    reverseOrder: 'Reversed order',
    hideIcon: 'Hide icon',
    hideMedia: 'Hide media',
    hideHeading: 'Hide heading',
    hideAbstract: 'Hide abstract',
    hideAction: 'Hide action',
  }
  const dutch: TopicOptionsTranslation = {
    reverseOrder: 'Draai volgorde om',
    hideIcon: 'Verberg icoon',
    hideMedia: 'Verberg media',
    hideHeading: 'Verberg titel',
    hideAbstract: 'Verberg tekst',
    hideAction: 'Verberg actie',
  }

  const language = locale.split('-')[0]
  let translation: TopicOptionsTranslation

  switch (language) {
    case 'en':
      translation = english
      break
    case 'nl':
      translation = dutch
      break
    default:
      translation = english
      break
  }
  const result: TopicOptions = {}
  Object.keys(translation).forEach((key) => {
    const optionSet =
      optionsStringList.includes(translation[key as TopicOptionsKeys] as any) ||
      overrideTopicOptions[key as TopicOptionsKeys]
    result[key as TopicOptionsKeys] = optionSet
  })
  return result
}

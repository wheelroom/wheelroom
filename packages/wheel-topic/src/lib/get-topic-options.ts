type TopicOptionStringEn =
  | 'Hide icon'
  | 'Hide media'
  | 'Hide heading'
  | 'Hide abstract'
  | 'Hide action'
  | 'Reversed order'
  | 'Preview mode'

type TopicOptionStringNl =
  | 'Verberg icoon'
  | 'Verberg media'
  | 'Verberg titel'
  | 'Verberg tekst'
  | 'Verberg actie'
  | 'Draai volgorde om'
  | 'Preview mode'

export type TopicOptionString = TopicOptionStringEn | TopicOptionStringNl

export type TopicOptionsKeys =
  | 'reverseOrder'
  | 'hideIcon'
  | 'hideMedia'
  | 'hideHeading'
  | 'hideAbstract'
  | 'hideAction'
  | 'previewMode'

export type TopicOptions = Partial<Record<TopicOptionsKeys, boolean>>
type TopicOptionsTranslation = Record<TopicOptionsKeys, string>

export const topicOptionsEnglish: TopicOptionsTranslation = {
  reverseOrder: 'Reversed order',
  hideIcon: 'Hide icon',
  hideMedia: 'Hide media',
  hideHeading: 'Hide heading',
  hideAbstract: 'Hide abstract',
  hideAction: 'Hide action',
  previewMode: 'Preview mode',
}
export const topicOptionsDutch: TopicOptionsTranslation = {
  reverseOrder: 'Draai volgorde om',
  hideIcon: 'Verberg icoon',
  hideMedia: 'Verberg media',
  hideHeading: 'Verberg titel',
  hideAbstract: 'Verberg tekst',
  hideAction: 'Verberg actie',
  previewMode: 'Preview mode',
}

export const getTopicOptions = (
  optionStrings: TopicOptionString[],
  overrideTopicOptions: TopicOptions = {},
  locale = 'en'
): TopicOptions => {
  const optionsStringList = optionStrings || []

  const language = locale.split('-')[0]
  let translation: TopicOptionsTranslation

  switch (language) {
    case 'en':
      translation = topicOptionsEnglish
      break
    case 'nl':
      translation = topicOptionsDutch
      break
    default:
      translation = topicOptionsEnglish
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

export const getEmptyTopicOptions = () => {
  return {
    reverseOrder: false,
    hideIcon: false,
    hideMedia: false,
    hideHeading: false,
    hideAbstract: false,
    hideAction: false,
    previewMode: false,
  }
}

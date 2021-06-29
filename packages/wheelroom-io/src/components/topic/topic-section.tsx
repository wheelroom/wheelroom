import { Div, Hr, Section } from '@wheelroom/any/react'
import {
  ComponentProps,
  StyleFactory,
  StyleMap,
  StyleObject,
} from '../../lib/component-styles'
import { mediaQuery } from '../../lib/media-query'
import { ContentfulTopic } from './contentful-topic'
import {
  ContentfulTopicSection,
  TopicSectionOptions,
  TopicSectionVariant,
} from './contentful-topic-section'
import { Topic } from './topic'

export type TopicSection = {
  contentfulTopicSection?: ContentfulTopicSection
}
export type TopicSectionProps = ComponentProps<
  TopicSection,
  TopicSectionVariant,
  TopicSectionOptions
>['div']

const baseStyle: StyleObject = {
  label: 'container',
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
}
const maxWidthStyle: StyleObject = {
  ...baseStyle,
  maxWidth: 1280,
  margin: '0 auto',
}

const styleMap: StyleMap<TopicSectionVariant> = {
  block: {
    ...maxWidthStyle,
    alignItems: ['center', 'initial'],
    flexDirection: ['column', 'row'],
    flexWrap: 'wrap',
  },
  card: {
    ...maxWidthStyle,
    alignItems: 'stretch',
    flexDirection: 'row',
    flexFlow: 'row wrap',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  divider: {
    margin: '1rem 0',
    color: 'inherit',
    backgroundColor: 'grey',
    border: 0,
    opacity: 0.25,
    height: 1,
  },
  gallery: {
    ...maxWidthStyle,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  hero: { ...baseStyle, paddingBottom: 0 },
  image: {
    ...maxWidthStyle,
    flexDirection: ['column', 'row'],
  },
  video: baseStyle,
  quote: {
    paddingBottom: 40,
  },
  showcase: {
    ...maxWidthStyle,
    alignItems: ['center', 'baseline'],
    justifyContent: 'center',
    maxWidth: ['35em', '54rem'],
  },
  text: {},
  featured: {},
  headline: {},
  navigation: {},
}

export const topicSectionStyleFactory: StyleFactory<
  TopicSectionVariant,
  TopicSectionOptions
> = (args) => {
  const useVariant = args.variant || 'block'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
}

export const TopicSection = ({ model, ...props }: TopicSectionProps) => {
  model = model || {}
  const section = model.contentfulTopicSection || {}
  const variant = section.variant
  if (variant === 'divider') {
    return <Hr css={topicSectionStyleFactory({ variant })} />
  }
  // Isolate topic options from topic section model
  const options: TopicSectionOptions = {}
  const optionKeys: (keyof TopicSectionOptions)[] = [
    'reversedOrder',
    'hideIcon',
    'hideMedia',
    'hideHeading',
    'hideAbstract',
    'hideAction',
  ]
  optionKeys.forEach(
    (key: keyof TopicSectionOptions) => (options[key] = section[key])
  )

  const css = topicSectionStyleFactory({
    options,
    variant,
  })

  return (
    <Section
      css={{
        label: 'wrapper',
      }}
    >
      <Div css={css} {...props}>
        {model.contentfulTopicSection?.topicsCollection?.items.map(
          (contentfulTopic: ContentfulTopic, index: number) => (
            <Topic
              key={'id-' + contentfulTopic.sys?.id + index}
              model={{ contentfulTopic }}
              options={options}
              variant={variant}
            />
          )
        )}
      </Div>
    </Section>
  )
}

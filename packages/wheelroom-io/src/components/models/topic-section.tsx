import { AnyProps, Div, Hr } from '@wheelroom/any/react'
import { mediaQuery } from '../../lib/media-query'
import { StyleFactory, StyleMap } from '../../lib/component-styles'
import { ContentfulTopic } from './contentful-topic'
import { Topic } from './topic'
import {
  ContentfulTopicSection,
  TopicSectionOptions,
  TopicSectionVariant,
} from './contentful-topic-section'

export interface TopicSection {
  contentfulTopicSection?: ContentfulTopicSection
}

type AnyDivProps = AnyProps['div']
export interface TopicSectionProps extends AnyDivProps {
  model?: TopicSection
  options?: TopicSectionOptions
  variant?: TopicSectionVariant
}

const baseStyle = {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  paddingBottom: 16,
}
const maxWidthStyle = {
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
    <Div css={{ label: 'Wrapper' }}>
      <Div css={css} {...props}>
        {model.contentfulTopicSection?.topicsCollection?.items.map(
          (contentfulTopic: ContentfulTopic, index) => (
            <Topic
              key={'id-' + contentfulTopic.sys?.id + index}
              model={{ contentfulTopic }}
              options={options}
              variant={variant}
            />
          )
        )}
      </Div>
    </Div>
  )
}

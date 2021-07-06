import { Div, Hr, Section } from '@wheelroom/any/react'
import {
  ComponentProps,
  StyleFactory,
  StyleMap,
  StyleObject,
} from '../../lib/component-styles'
import { mediaQuery } from '../../lib/media-query'
import { GridSection } from '../layout/grid-section'
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

const topicSectionStyle: StyleObject = {
  label: 'grid-container',
  display: 'grid',
  gridArea: 'topic',
}

const styleMap: StyleMap<TopicSectionVariant> = {
  block: {
    ...topicSectionStyle,
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gridAutoRows: 'minmax(288px, auto)',
    gridGap: 16,
  },
  card: {
    ...topicSectionStyle,
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gridAutoRows: 'minmax(288px, auto)',
    gridGap: 16,
    // ...maxWidthStyle,
    // alignItems: 'stretch',
    // flexDirection: 'row',
    // flexFlow: 'row wrap',
    // flexWrap: 'wrap',
    // justifyContent: 'center',
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  hero: { ...topicSectionStyle, paddingBottom: 0 },
  image: {
    flexDirection: ['column', 'row'],
  },
  video: topicSectionStyle,
  quote: {
    paddingBottom: 40,
  },
  showcase: {
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
  const baseTopicSectionStyle = styleMap[useVariant]
  return mediaQuery([baseTopicSectionStyle])
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
        display: 'grid',
        gridTemplateColumns: '1fr minmax(auto, 1280px) 1fr',
        gridTemplateAreas: '". topic ."',
      }}
    >
      {/* The Section wrapper around the Container is used for full-width background-color */}
      <Div css={css} {...props}>
        {model.contentfulTopicSection?.topicsCollection?.items.map(
          (contentfulTopic: ContentfulTopic, index: number) => (
            <Topic
              key={'id-' + contentfulTopic.sys?.id + '-' + index}
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

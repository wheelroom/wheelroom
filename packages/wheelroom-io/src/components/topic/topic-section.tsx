import { Div, Hr } from '@wheelroom/any/react'
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
  /**
   * Grid Area
   * ---------
   * section = 'max-width: 1280px'
   * page = 'full-width: 100%'
   */
  gridArea: 'section',
  justifyContent: 'center',
  gridGap: 32,
  margin: 16,
}

const styleMap: StyleMap<TopicSectionVariant> = {
  block: {
    ...topicSectionStyle,
    gridTemplateColumns: `repeat(auto-fill, minmax(320px, 1fr))`,
  },
  card: {
    ...topicSectionStyle,
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 320px))',
  },
  divider: {
    margin: '1rem 0',
    color: 'inherit',
    backgroundColor: 'grey',
    border: 0,
    opacity: 0.25,
    height: 1,
  },
  featured: topicSectionStyle,
  gallery: {
    ...topicSectionStyle,
    gridArea: 'page',
    gridTemplateColumns: `repeat(auto-fill, minmax(33.335%, 1fr))`,
  },
  headline: {
    ...topicSectionStyle,
  },
  hero: {
    ...topicSectionStyle,
    gridArea: 'page',
  },
  image: topicSectionStyle,
  quote: topicSectionStyle,
  showcase: {
    ...topicSectionStyle,
    gridTemplateColumns: `repeat(auto-fill, minmax(35rem, 54rem))`,
  },
  video: topicSectionStyle,
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
    <GridSection>
      {/* The Section wrapper sets full-width Section background-color */}
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
    </GridSection>
  )
}

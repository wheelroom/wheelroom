import { Div } from '@wheelroom/any/react'
import { mediaQuery } from '../../lib/media-query'
import {
  ComponentProps,
  StyleFactory,
  StyleMap,
  StyleObject,
} from '../../lib/component-styles'
import {
  TopicSectionOptions,
  TopicSectionVariant,
} from './contentful-topic-section'
import { TopicContent } from './topic-content'
import { TopicMedia } from './topic-media'
import { ContentfulTopic } from './contentful-topic'

export type Topic = {
  contentfulTopic?: ContentfulTopic
}
export type TopicProps = ComponentProps<
  Topic,
  TopicSectionVariant,
  TopicSectionOptions
>['div']

const baseStyle: StyleObject = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}

const styleMap: StyleMap<TopicSectionVariant> = {
  block: {},
  card: {
    ...baseStyle,
    border: '1px solid transparent',
    borderColor: 'lightgrey',
    borderRadius: 4,
    boxShadow: '0 0 16px',
    color: 'lightgrey',
    margin: 16,
    maxWidth: 288,
    minWidth: 288,
    textDecoration: 'none',
    '> div:last-of-type': {
      paddingTop: 0,
    },
    '> div:only-of-type': {
      paddingTop: 16,
    },
    transition: 'transform .25s ease',
    ':hover': {
      transform: 'translate3d(0, -4px, 0)',
    },
  },
  divider: {
    margin: '1rem 0',
    color: 'inherit',
    backgroundColor: 'grey',
    border: 0,
    opacity: 0.25,
    height: 1,
  },
  featured: {
    ...baseStyle,
    flexDirection: ['column', 'column', 'row'],
    justifyContent: 'space-evenly',
    padding: '16x 0',
    alignItems: 'center',
  },
  gallery: {
    width: '50%',
  },
  hero: {
    position: 'relative',
  },
  showcase: {
    ...baseStyle,
    flexDirection: ['column', 'row'],
    padding: '16px 0',
  },
  video: baseStyle,
  headline: {},
  image: {},
  navigation: {},
  quote: {},
  text: {},
}

const reversedOrderOptionStyle = {}

const hideMediaOptionStyle = {}

export const topicStyleFactory: StyleFactory<
  TopicSectionVariant,
  TopicSectionOptions
> = (args) => {
  const useVariant = args.variant || 'block'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([
    baseStyle,
    args.options?.reversedOrder && reversedOrderOptionStyle,
    args.options?.hideMedia && hideMediaOptionStyle,
  ])
}

export const Topic = ({ model, options, variant, ...props }: TopicProps) => {
  const css = topicStyleFactory({
    options,
    variant,
  })
  model = model || {}

  return (
    <Div css={css} {...props}>
      <TopicMedia
        variant={variant}
        model={{
          contentfulAssets: model.contentfulTopic?.mediaCollection?.items,
          contentfulEmbed: model.contentfulTopic?.mediaEmbed,
          contentfulPosterAsset: model.contentfulTopic?.poster,
        }}
      />
      <TopicContent
        variant={variant}
        model={{
          abstractString: model.contentfulTopic?.abstract,
          contentfulActions: model.contentfulTopic?.actionsCollection?.items,
          headingString: model.contentfulTopic?.heading,
        }}
        options={options}
      />
    </Div>
  )
}

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

const topicStyle: StyleObject = {
  display: 'grid',
  gridGap: 16,
  gridTemplateAreas: `"picture" "heading" "text" "actions"`,
  gridTemplateRows: 'auto auto 1fr auto',
}

const styleMap: StyleMap<TopicSectionVariant> = {
  block: topicStyle,
  card: {
    ...topicStyle,
    padding: 16,
    border: '1px solid transparent',
    borderColor: 'lightgrey',
    borderRadius: 4,
    boxShadow: '0 0 16px',
    color: 'lightgrey',
    textDecoration: 'none',
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
    ...topicStyle,
    // flexDirection: ['column', 'column', 'row'],
    // justifyContent: 'space-evenly',
    // padding: '16x 0',
    // alignItems: 'center',
  },
  gallery: {},
  headline: {},
  hero: {
    position: 'relative',
  },
  image: {},
  quote: {},
  showcase: {
    ...topicStyle,
    // flexDirection: ['column', 'row'],
    // padding: '16px 0',
  },
  video: topicStyle,
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

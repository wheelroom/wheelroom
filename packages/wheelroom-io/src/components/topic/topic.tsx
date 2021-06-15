import { AnyProps } from '@wheelroom/any/any'
import { Div } from '@wheelroom/any/elements'
import { mediaQuery } from '../../lib/media-query'
import {
  TopicSectionOptions,
  TopicSectionVariant,
} from '../topic-section/contentful-topic-section'
import { TopicContent } from './topic-content'
import { TopicMedia } from './topic-media'
import { ContentfulTopic } from './contentful-topic'

export type Topic = {
  contentfulTopic?: ContentfulTopic
}

type AnyDivProps = AnyProps['div']
export interface TopicProps extends AnyDivProps {
  model?: Topic
  options?: TopicSectionOptions
  variant?: TopicSectionVariant
}

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}

const styleMap: Partial<Record<TopicSectionVariant, any>> = {
  block: {
    ...baseStyle,
    padding: '16px',
    width: ['100%', '50%', '33.33%'],
    maxWidth: '35em',
  },
  card: {
    ...baseStyle,
    border: '1px solid transparent',
    borderColor: 'lightgrey',
    borderRadius: '4px',
    boxShadow: '0 0 16px',
    color: 'lightgrey',
    margin: '16px',
    maxWidth: '288px',
    minWidth: '288px',
    textDecoration: 'none',
    '> div:last-of-type': {
      paddingTop: 0,
    },
    '> div:only-of-type': {
      paddingTop: '16px',
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
    opacity: '0.25',
    height: '1px',
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
}

const reversedOrderOptionStyle = {}

const hideMediaOptionStyle = {}

export const topicStyleFactory = (args: {
  variant?: TopicSectionVariant
  options?: TopicSectionOptions
}) => {
  const useVariant = args.variant || 'block'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([
    baseStyle,
    args.options?.reversedOrder && reversedOrderOptionStyle,
    args.options?.hideMedia && hideMediaOptionStyle,
  ])
}

export const Topic = ({ model, options, variant, ...props }: TopicProps) => {
  const css: any = topicStyleFactory({
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
          abstract: model.contentfulTopic?.abstract,
          actions: model.contentfulTopic?.actionsCollection?.items,
          heading: model.contentfulTopic?.heading,
        }}
        options={options}
      />
    </Div>
  )
}

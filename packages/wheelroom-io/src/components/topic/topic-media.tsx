import { mediaQuery } from '../../lib/media-query'
import {
  ComponentProps,
  StyleFactory,
  StyleMap,
} from '../../lib/component-styles'
import { Asset, AssetProps } from '../models/asset'
import { ContentfulAsset } from '../models/contentful-asset'
import { ContentfulEmbed } from '../models/contentful-embed'
import { Embed, EmbedProps } from '../models/embed'
import {
  TopicSectionOptions,
  TopicSectionVariant,
} from './contentful-topic-section'

type TopicMedia = {
  contentfulAssets?: ContentfulAsset[]
  contentfulPosterAsset?: ContentfulAsset
  contentfulEmbed?: ContentfulEmbed
}
export type TopicMediaProps = ComponentProps<
  TopicMedia,
  TopicSectionVariant,
  TopicSectionOptions
>['div']

const topicMediaStyle = {
  gridArea: 'media',
  margin: 'auto',
}

const styleMap: StyleMap<TopicSectionVariant> = {
  block: {
    ...topicMediaStyle,
    display: 'block',
    height: 0,
    paddingBottom: '56.25%',
    position: 'relative',
    img: {
      display: 'block',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      width: '100%',
    },
  },
  card: {
    ...topicMediaStyle,
    display: 'block',
    height: 178,
    img: {
      display: 'block',
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
  },
  featured: {
    ...topicMediaStyle,
    // maxWidth: ['35em', '35em', '45%'],
    // width: '100%',
    img: {
      display: 'block',
      height: 'auto',
      width: '100%',
    },
  },
  gallery: {
    ...topicMediaStyle,
    img: {
      display: 'block',
      height: 'auto',
      width: '100%',
    },
  },
  headline: {
    ...topicMediaStyle,
    img: {
      display: 'block',
      height: '100%',
      width: '100%',
    },
  },
  hero: {
    ...topicMediaStyle,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    overflow: 'hidden',
    zIndex: -1,
    img: {
      objectFit: 'cover',
      display: 'block',
      height: 'auto',
      width: '100%',
    },
  },
  quote: {
    ...topicMediaStyle,
    overflow: 'hidden',
    height: 200,
    width: 200,
    borderRadius: 100,
    margin: '0 auto',
    img: {
      display: 'block',
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
  },
  showcase: {
    ...topicMediaStyle,
    maxWidth: 254,
    width: '100%',
    img: {
      display: 'block',
      height: '100%',
      width: '100%',
    },
  },
  video: topicMediaStyle,
  divider: topicMediaStyle,
  image: topicMediaStyle,
}

export const topicMediaStyleFactory: StyleFactory<
  TopicSectionVariant,
  TopicSectionOptions
> = (args) => {
  const useVariant = args.variant || 'block'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
}

export const TopicMedia = ({ model, variant, ...props }: TopicMediaProps) => {
  const css = topicMediaStyleFactory({
    variant,
  })
  model = model || {}

  let mediaElement = null
  if (model.contentfulAssets?.length) {
    const assetProps = {
      model: {
        contentfulAsset: model.contentfulAssets[0],
        contentfulPosterAsset: model.contentfulPosterAsset,
      },
      ...props,
    } as AssetProps
    mediaElement = <Asset css={css} {...assetProps} />
  } else if (model.contentfulEmbed) {
    const embedProps = props as EmbedProps
    mediaElement = <Embed css={css} {...embedProps} />
  } else {
    return null
  }

  return <>{mediaElement}</>
}

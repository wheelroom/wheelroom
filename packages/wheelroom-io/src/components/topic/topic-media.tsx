import { AnyProps } from '@wheelroom/any/any'
import { Div } from '@wheelroom/any/elements'
import { mediaQuery } from '../../lib/media-query'
import { ContentfulAsset } from '../asset/contentful-asset'
import { Image, ImageProps } from '../asset/image'
import { Video, VideoProps } from '../asset/video'
import { ContentfulEmbed } from '../embed/contentful-embed'
import { Embed, EmbedProps } from '../embed/embed'
import {
  TopicSectionOptions,
  TopicSectionVariant,
} from '../topic-section/contentful-topic-section'

type TopicMedia = {
  contentfulAssets?: ContentfulAsset[]
  contentfulPosterAsset?: ContentfulAsset
  contentfulEmbed?: ContentfulEmbed
}

type AnyDivProps = AnyProps['div']
export interface TopicMediaProps extends AnyDivProps {
  model?: TopicMedia
  variant?: TopicSectionVariant
}

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  ':only-of-type': {},
}

const styleMap: Partial<Record<TopicSectionVariant, any>> = {
  block: {
    ...baseStyle,
    picture: {
      display: 'block',
      height: '0px',
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
  },
  card: {
    ...baseStyle,
    margin: '16px',
    picture: {
      display: 'block',
      height: '178px',
      img: {
        display: 'block',
        height: '100%',
        width: '100%',
        objectFit: 'cover',
      },
    },
  },
  featured: {
    ...baseStyle,
    padding: '16px',
    maxWidth: ['35em', '35em', '45%'],
    width: '100%',
    picture: {
      img: {
        display: 'block',
        height: 'auto',
        width: '100%',
      },
    },
  },
  gallery: {
    ...baseStyle,
    picture: {
      padding: '16px',
      img: {
        display: 'block',
        height: 'auto',
        width: '100%',
      },
    },
  },
  headline: {
    ...baseStyle,
    picture: {
      img: {
        display: 'block',
        height: '100%',
        width: '100%',
      },
    },
  },
  hero: {
    ...baseStyle,
    bottom: '0',
    left: '0',
    position: 'absolute',
    right: '0',
    top: '0',
    overflow: 'hidden',
    zIndex: -1,
    picture: {
      img: {
        objectFit: 'cover',
        display: 'block',
        height: 'auto',
        width: '100%',
      },
    },
  },
  quote: {
    ...baseStyle,
    padding: '16px',
    picture: {
      overflow: 'hidden',
      height: '200px',
      width: '200px',
      borderRadius: '100px',
      margin: '0 auto',
      img: {
        display: 'block',
        height: '100%',
        width: '100%',
        objectFit: 'cover',
      },
    },
  },
  showcase: {
    ...baseStyle,
    padding: '16px',
    maxWidth: '254px',
    width: '100%',
    picture: {
      img: {
        display: 'block',
        height: '100%',
        width: '100%',
      },
    },
  },
  video: baseStyle,
}

export const topicMediaStyleFactory = (args: {
  variant?: TopicSectionVariant
  options?: TopicSectionOptions
}) => {
  const useVariant = args.variant || 'block'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
}

export const TopicMedia = ({ model, variant, ...props }: TopicMediaProps) => {
  const css: any = topicMediaStyleFactory({
    variant,
  })
  model = model || {}

  let mediaElement = null
  if (model.contentfulAssets?.length) {
    const mediaType = (model.contentfulAssets[0].contentType || '').split('/')
    if (mediaType[0] === 'image') {
      const imageProps = props as ImageProps
      mediaElement = (
        <Image
          model={{ contentfulAsset: model.contentfulAssets[0] }}
          {...imageProps}
        />
      )
    } else if (mediaType[0] === 'video') {
      const videoProps = props as VideoProps
      mediaElement = (
        <Video
          model={{
            contentfulAsset: model.contentfulAssets[0],
            contentfulPosterAsset: model.contentfulPosterAsset,
          }}
          {...videoProps}
        />
      )
    }
  } else if (model.contentfulEmbed) {
    const embedProps = props as EmbedProps
    mediaElement = <Embed {...embedProps} />
  }

  return (
    <Div css={css} {...props}>
      {mediaElement}
    </Div>
  )
}

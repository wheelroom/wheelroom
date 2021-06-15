import { AnyProps } from '@wheelroom/any/any'
import { Div } from '@wheelroom/any/elements'
import { mediaQuery } from '../../lib/media-query'
import { ContentfulAsset } from '../asset/contentful-asset'
import { Image, ImageProps } from '../asset/image'
import { Video, VideoProps } from '../asset/video'
import { Embed, EmbedProps } from '../embed/embed'
import {
  TopicSectionOptions,
  TopicSectionVariant,
} from '../topic-section/contentful-topic-section'

type TopicMedia = {
  media?: Media
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

// TODO: Temp fix. Refactor Media component
export type Media = Image | Video | Embed
export type MediaProps = ImageProps | VideoProps | EmbedProps

export const Media = (props: MediaProps) => {
  const imageOrVideoProps = props as ImageProps | VideoProps
  if (imageOrVideoProps.model?.item?.contentType) {
    const mediaType = (imageOrVideoProps.model.item.contentType || '').split(
      '/'
    )
    if (mediaType[0] === 'image') {
      const imageProps = props as ImageProps
      return <Image {...imageProps} />
    }
    if (mediaType[0] === 'video') {
      const videoProps = props as VideoProps
      return <Video {...videoProps} />
    }
  }
  const embedProps = props as EmbedProps
  if (embedProps.model?.item?.code) {
    return <Embed {...embedProps} />
  }
  return null
}

export const TopicMedia = ({
  model,
  // options,
  variant,
  ...props
}: TopicMediaProps) => {
  const css: any = topicMediaStyleFactory({
    variant,
  })
  model = model || {}

  return (
    <Div css={css} {...props}>
      <Media model={{ item: model.item as ContentfulAsset }} />
    </Div>
  )
}

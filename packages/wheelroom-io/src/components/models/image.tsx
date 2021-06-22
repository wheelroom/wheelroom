import { AnyProps, Figcaption, Img, Picture } from '@wheelroom/any/react'
import { mediaQuery } from '../../lib/media-query'
import {
  ComponentOptions,
  ComponentProps,
  StyleFactory,
} from '../../lib/component-styles'
import { ContentfulAsset } from '../models/contentful-asset'

export type Image = {
  contentfulAsset?: ContentfulAsset
}
export type ImageVariant = 'fluid'
export type ImageOptions = ComponentOptions<'showCaption'>

type ImageProps = ComponentProps<Image, ImageVariant, ImageOptions>['picture']

const defaultAsset: ContentfulAsset = {
  sys: {
    id: 'default-asset',
  },
  contentType: 'image/png',
  description: 'No media description available',
  fileName: '2560x1600.png',
  height: 1600,
  size: 1000,
  title: 'Dummy image',
  url: 'https://dummyimage.com/2560x1600/000/fff.png',
  width: 2560,
}

const fluidImageStyle = {
  img: {
    display: 'block',
    width: '100%',
  },
}

export const imageStyleFactory: StyleFactory<ImageVariant, ImageOptions> = (
  args
) => {
  const baseStyle = {}
  return mediaQuery([baseStyle, args.variant === 'fluid' && fluidImageStyle])
}

export const Image = ({ model, options, variant, ...props }: ImageProps) => {
  const asset = model?.contentfulAsset || defaultAsset
  options = options || {}
  /**
   * Avoid video asset media
   * The complete list of file types can be found here:
   * https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers
   */

  if (['video/ogg', 'video/mp4', 'video/webm'].includes(asset.contentType)) {
    return null
  }

  const imgProps: AnyProps['img'] = {
    alt: asset.description,
    title: asset.title,
  }

  // Not all image content types are supporting the attribute src set
  if (['image/jpeg', 'image/webp', 'image/png'].includes(asset.contentType)) {
    //TODO: Implement src set
    imgProps.src = asset.url
  } else {
    imgProps.src = asset.url
  }

  const css: any = imageStyleFactory({
    variant,
    options,
  })

  return (
    <Picture css={css} {...props}>
      <Img {...imgProps} />
      {options.showCaption && <Figcaption>{asset.description}</Figcaption>}
    </Picture>
  )
}

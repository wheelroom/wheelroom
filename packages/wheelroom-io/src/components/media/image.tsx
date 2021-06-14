import { AnyProps } from '@wheelroom/any/any'
import { Img, Picture, Figcaption } from '@wheelroom/any/elements'
import { ContentfulAsset } from './contentful-asset'

export interface Image {
  item?: ContentfulAsset
}

export type ImageOption = 'showCaption'
export type ImageOptions = Partial<Record<ImageOption, boolean>>

type AnyPictureProps = AnyProps['picture']
export interface ImageProps extends AnyPictureProps {
  model?: Image
  options?: ImageOptions
}

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

export const Image = ({ model, options, ...props }: ImageProps) => {
  const asset = model?.item || defaultAsset
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

  return (
    <Picture {...props}>
      <Img {...imgProps} />
      {options.showCaption && <Figcaption>{asset.description}</Figcaption>}
    </Picture>
  )
}

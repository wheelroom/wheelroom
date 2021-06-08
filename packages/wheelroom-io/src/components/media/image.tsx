import { AnyProps } from '@wheelroom/any/Any'
import { Img, Picture, Figcaption } from '@wheelroom/any/elements'
import { Asset } from './asset'

export interface ImageProps {
  asset?: Asset
  showCaption?: boolean
}

const defaultAsset: Asset = {
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

export const Image = (props: ImageProps) => {
  const asset = props.asset || defaultAsset
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
    <Picture>
      <Img {...imgProps} />
      {props.showCaption && <Figcaption>{asset.description}</Figcaption>}
    </Picture>
  )
}

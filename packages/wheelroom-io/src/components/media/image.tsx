import { AnyProps } from '@wheelroom/any/Any'
import { Img, Picture, Figcaption } from '@wheelroom/any/elements'
import { Media } from './media'

export interface ImageProps {
  media?: Media
  showCaption?: boolean
}

const defaultMedia: Media = {
  sys: {
    id: 'default-media',
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
  const media = props.media || defaultMedia
  /**
   * Avoid video media asset
   * The complete list of file types can be found here:
   * https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers
   */

  if (['video/ogg', 'video/mp4', 'video/webm'].includes(media.contentType)) {
    return null
  }

  const imgProps: AnyProps['img'] = {
    alt: media.description,
    title: media.title,
  }

  // Not all image content types are supporting the attribute src set
  if (['image/jpeg', 'image/webp', 'image/png'].includes(media.contentType)) {
    //TODO: Implement src set
    imgProps.src = media.url
  } else {
    imgProps.src = media.url
  }

  return (
    <Picture>
      <Img {...imgProps} />
      {props.showCaption && <Figcaption>{media.description}</Figcaption>}
    </Picture>
  )
}

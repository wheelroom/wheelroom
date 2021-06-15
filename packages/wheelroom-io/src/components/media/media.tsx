import { Image, ImageProps } from './image'
import { Video, VideoProps } from './video'
import { Embed, EmbedProps } from './embed'

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

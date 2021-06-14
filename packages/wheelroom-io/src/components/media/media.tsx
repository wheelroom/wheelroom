import { Image, ImageProps } from './image'
import { Video, VideoProps } from './video'
import { MediaBreakpoint, MediaBreakpointProps } from './medfia-breakpoint'
import { Embed, EmbedProps } from './embed'

export type Media = Image | Video | MediaBreakpoint | Embed
export type MediaProps =
  | ImageProps
  | VideoProps
  | MediaBreakpointProps
  | EmbedProps

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
  const mediaBreakpointdProps = props as MediaBreakpointProps
  const item = mediaBreakpointdProps.model?.item || {}
  if (item.extraLarge || item.large || item.medium || item.small) {
    return <MediaBreakpoint {...mediaBreakpointdProps} />
  }
  return null
}

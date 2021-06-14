import { Image, ImageProps } from './image'
import { Video, VideoProps } from './video'

export type Asset = Image | Video
export type AssetProps = ImageProps | VideoProps

export const Asset = (props: ImageProps | VideoProps) => {
  const mediaType = (props.model?.item?.contentType || '').split('/')
  if (mediaType[0] === 'image') {
    return <Image model={props.model} />
  }
  if (mediaType[0] === 'video') {
    return <Video model={props.model} />
  }
  return null
}

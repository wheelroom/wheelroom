import { Image, ImageProps } from './image'
import { Video, VideoProps } from './video'

export type Asset = Image | Video
export type AssetProps = ImageProps | VideoProps

export const Asset = ({ model, ...props }: AssetProps) => {
  let mediaElement = null
  const mediaType = (model?.contentfulAsset?.contentType || '').split('/')
  if (mediaType[0] === 'image') {
    const imageModel = model as Image
    const imageProps = props as ImageProps
    mediaElement = (
      <Image
        model={{ contentfulAsset: imageModel.contentfulAsset }}
        {...imageProps}
      />
    )
  } else if (mediaType[0] === 'video') {
    const videoModel = model as Video
    const videoProps = props as VideoProps
    mediaElement = (
      <Video
        model={{
          contentfulAsset: videoModel.contentfulAsset,
          contentfulPosterAsset: videoModel.contentfulPosterAsset,
        }}
        {...videoProps}
      />
    )
  }

  return mediaElement
}

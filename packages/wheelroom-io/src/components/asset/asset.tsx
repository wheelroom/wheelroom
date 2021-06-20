import { mediaQuery } from '../../lib/media-query'
import { Image, ImageProps } from './image'
import { Video, VideoProps } from './video'

export type AssetVariant = 'fluid' | 'fixedWidth'

export type Asset = Image | Video
export type AssetProps = (ImageProps | VideoProps) & {
  variant?: AssetVariant
}

const baseStyle = {
  img: {
    display: 'block',
    width: '100%',
  },
}

const styleMap: Partial<Record<AssetVariant, any>> = {
  fluid: {
    ...baseStyle,
  },
  fixedWidth: {
    ...baseStyle,
  },
}

export const assetStyleFactory = (args: {
  variant?: AssetVariant
  options?: any
}) => {
  const useVariant = args.variant || 'fluid'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
}

export const Asset = ({ model, variant, ...props }: AssetProps) => {
  const css = assetStyleFactory({ variant })

  let mediaElement = null
  const mediaType = (model?.contentfulAsset?.contentType || '').split('/')
  if (mediaType[0] === 'image') {
    const imageModel = model as Image
    const imageProps = props as ImageProps
    mediaElement = (
      <Image
        css={css}
        model={{ contentfulAsset: imageModel.contentfulAsset }}
        {...imageProps}
      />
    )
  } else if (mediaType[0] === 'video') {
    const videoModel = model as Video
    const videoProps = props as VideoProps
    mediaElement = (
      <Video
        css={css}
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

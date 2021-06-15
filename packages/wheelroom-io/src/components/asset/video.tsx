import { AnyProps } from '@wheelroom/any/any'
import { Video as AnyVideo, Source, P, B } from '@wheelroom/any/elements'
import { ContentfulAsset } from './contentful-asset'

export interface Video {
  item?: ContentfulAsset
  poster?: ContentfulAsset
}

export type VideoOption = 'showCaption'
export type VideoOptions = Partial<Record<VideoOption, boolean>>

type AnyVideoProps = AnyProps['video']
export interface VideoProps extends AnyVideoProps {
  model?: Video
  options?: VideoOptions
}

const defaultAsset: ContentfulAsset = {
  sys: {
    id: 'default-asset',
  },
  contentType: 'video/mp4',
  description: 'No media description available',
  fileName: 'none.mp4',
  height: 1600,
  size: 1000,
  title: 'Dummy video',
  url: '',
  width: 2560,
}

export const Video = ({ model, options, ...props }: VideoProps) => {
  const asset = model?.item || defaultAsset
  options = options || {}
  model = model || {}

  if (['image/jpeg', 'image/webp', 'image/png'].includes(asset.contentType)) {
    return null
  }

  const videoProps: AnyProps['video'] = {
    poster: model.poster?.url,
    title: asset.title,
  }
  const sourceProps: AnyProps['source'] = {
    src: asset.url,
    type: asset.contentType,
  }

  return (
    <>
      <AnyVideo {...videoProps} {...props} controls playsInline>
        <Source {...sourceProps} />
        Your browser does not support the video tag.
      </AnyVideo>
      {options.showCaption && (
        <P>
          <B>{asset.title}</B>
          {asset.description}
        </P>
      )}
    </>
  )
}

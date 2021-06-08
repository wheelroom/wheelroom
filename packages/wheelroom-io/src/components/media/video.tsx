import { AnyProps } from '@wheelroom/any/Any'
import { Video as AnyVideo, Source, P, B } from '@wheelroom/any/elements'
import { Asset } from './asset'

export interface VideoProps {
  asset?: Asset
  poster?: string
  showCaption?: boolean
}

const defaultAsset: Asset = {
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

export const Video = (props: VideoProps) => {
  const asset = props.asset || defaultAsset

  if (['image/jpeg', 'image/webp', 'image/png'].includes(asset.contentType)) {
    return null
  }

  const videoProps: AnyProps['video'] = {
    poster: props.poster,
    title: asset.title,
  }
  const sourceProps: AnyProps['source'] = {
    src: asset.url,
    type: asset.contentType,
  }

  return (
    <>
      <AnyVideo {...videoProps} controls playsInline>
        <Source {...sourceProps} />
        Your browser does not support the video tag.
      </AnyVideo>
      {props.showCaption && (
        <P>
          <B>{asset.title}</B>
          {asset.description}
        </P>
      )}
    </>
  )
}

import { AnyProps, Video as AnyVideo, Source, P, B } from '@wheelroom/any/react'
import {
  ComponentOptions,
  ComponentProps,
  StyleFactory,
} from '../../lib/component-styles'
import { mediaQuery } from '../../lib/media-query'
import { ContentfulAsset } from './contentful-asset'

export interface Video {
  contentfulAsset?: ContentfulAsset
  contentfulPosterAsset?: ContentfulAsset
}
export type VideoVariant = 'fluid'
export type VideoOptions = ComponentOptions<'showCaption'>
export type VideoProps = ComponentProps<
  Video,
  VideoVariant,
  VideoOptions
>['video']

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

const fluidVideoStyle = {
  display: 'block',
  width: '100%',
}

export const VideoStyleFactory: StyleFactory<VideoVariant, VideoOptions> = (
  args
) => {
  const baseStyle = {}
  return mediaQuery([baseStyle, args.variant === 'fluid' && fluidVideoStyle])
}

export const Video = ({ model, options, ...props }: VideoProps) => {
  const asset = model?.contentfulAsset || defaultAsset
  options = options || {}
  model = model || {}

  if (['image/jpeg', 'image/webp', 'image/png'].includes(asset.contentType)) {
    return null
  }

  const videoProps: AnyProps['video'] = {
    poster: model.contentfulPosterAsset?.url,
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

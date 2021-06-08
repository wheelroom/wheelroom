import { AnyProps } from '@wheelroom/any/Any'
import { Video as AnyVideo, Source, P, B } from '@wheelroom/any/elements'
import { Media } from './media'

export interface VideoProps {
  media?: Media
  poster?: string
  showCaption?: boolean
}

const defaultMedia: Media = {
  sys: {
    id: 'default-media',
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
  const media = props.media || defaultMedia

  if (['image/jpeg', 'image/webp', 'image/png'].includes(media.contentType)) {
    return null
  }

  const videoProps: AnyProps['video'] = {
    poster: props.poster,
    title: media.title,
  }
  const sourceProps: AnyProps['source'] = {
    src: media.url,
    type: media.contentType,
  }

  return (
    <>
      <AnyVideo {...videoProps} controls playsInline>
        <Source {...sourceProps} />
        Your browser does not support the video tag.
      </AnyVideo>
      {props.showCaption && (
        <P>
          <B>{media.title}</B>
          {media.description}
        </P>
      )}
    </>
  )
}

/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from '@emotion/core'
import { styledSystem } from '@wheelroom/styled-system'
import { MediaObject } from '../types/media'
import { mergeNcss } from '../../lib/merge-ncss'
import { NcssObjectProps } from '../../lib/ncss'
import { Wheel } from '../../lib/wheel'
import { videoDescriptionReset, videoVideoElementStyle } from './video-reset'

export interface VideoElementStyle {
  video: NcssObjectProps
  description?: NcssObjectProps
}

export interface VideoElementProps {
  /** Styling wheel */
  wheel: Wheel
  description?: string
  includeDescription?: boolean
  includeTitle?: boolean
  media?: MediaObject
  poster?: string
  title?: string
}

const defaultMediaObject = {
  description: 'no description',
  file: {
    url: 'https://www.example.com',
    fileName: 'none',
    contentType: 'video/mp4',
  },
  title: 'no title available',
} as MediaObject

export const Video = (props: VideoElementProps) => {
  /** The complete list of file types can be found here:
   * https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers */
  if (
    props.media?.file?.contentType === 'video/ogg' ||
    props.media?.file?.contentType === 'video/mp4' ||
    props.media?.file?.contentType === 'video/webm'
  ) {
    const media = props.media || defaultMediaObject
    const videoAttrs = {
      poster: props.poster || '',
      title: media.title || props.title || defaultMediaObject.title,
      url: (media.file && media.file.url) || defaultMediaObject.file!.url,
      type:
        (media.file && media.file.contentType) ||
        defaultMediaObject.file!.contentType,
      description:
        media.description ||
        props.description ||
        defaultMediaObject.description,
    }

    const style = props.wheel.style || {}
    const video = style.video || {}
    const description = style.description || {}

    const videoLabel = { ncss: { label: 'video-video' } }
    const descriptionLabel = { ncss: { label: 'video-description' } }
    return (
      <Fragment>
        <video
          poster={videoAttrs.poster && videoAttrs.poster + '?q=75'}
          css={styledSystem(
            props.wheel.wrSystemConfig,
            props.wheel.wrSystemTheme,
            mergeNcss([
              videoLabel,
              videoVideoElementStyle,
              props.wheel.elementStyles.video.video,
              video,
            ])
          )}
          controls
          playsInline
        >
          <source src={videoAttrs.url} type={videoAttrs.type} />
          Your browser does not support the video tag.
        </video>
        {props.includeTitle && (
          <p
            css={styledSystem(
              props.wheel.wrSystemConfig,
              props.wheel.wrSystemTheme,
              mergeNcss([
                descriptionLabel,
                videoDescriptionReset,
                props.wheel.elementStyles.video.description,
                description,
              ])
            )}
          >
            <b>{videoAttrs.title}</b>
            {props.includeDescription && ` – ` + videoAttrs.description}
          </p>
        )}
      </Fragment>
    )
  } else return null
}

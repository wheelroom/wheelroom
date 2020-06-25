/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from '@emotion/core'
import { styledSystem } from '@wheelroom/styled-system'
import { MediaObject } from '../types/media'
import { mergeNcss } from '../../lib/merge-ncss'
import { NcssObjectProps } from '../../lib/ncss'
import { Wheel } from '../../lib/wheel'
import { videoDescriptionReset, videoVideoElementStyle } from './video-reset'

export interface VideoElementStyle extends NcssObjectProps {
  description?: NcssObjectProps
}

export interface VideoElementProps {
  wheel: Wheel
  description?: string
  includeDescription?: boolean
  includeTitle?: boolean
  media?: MediaObject
  poster?: string
  title?: string
}

const defaultMediaObject = {
  description: 'No media description available',
  file: {
    url: 'https://www.example.com',
    fileName: 'none',
    contentType: 'video/mp4',
  },
  title: 'No media title available',
} as MediaObject

export const Video = (props: VideoElementProps) => {
  const media = props.media || defaultMediaObject
  if (
    media?.file?.contentType === 'image/jpeg' ||
    media?.file?.contentType === 'image/webp' ||
    media?.file?.contentType === 'image/png'
  ) {
    return null
  }

  const videoAttrs = {
    poster: props.poster || '',
    title: media.title || props.title || defaultMediaObject.title,
    url: (media.file && media.file.url) || defaultMediaObject.file!.url,
    type:
      (media.file && media.file.contentType) ||
      defaultMediaObject.file!.contentType,
    description:
      media.description || props.description || defaultMediaObject.description,
  }

  const videoLabel = { ncss: { label: 'video' } }
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
            props.wheel.elementStyles.video,
            props.wheel.style,
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
              props.wheel.style.description,
            ])
          )}
        >
          <b>{videoAttrs.title}</b>
          {props.includeDescription && ` – ` + videoAttrs.description}
        </p>
      )}
    </Fragment>
  )
}

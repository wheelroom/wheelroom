/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from '@emotion/core'
import { styledSystem } from '@wheelroom/styled-system'
import { MediaGatsbyModel } from '../models/media-breakpoint/media-gatsby-model'
import { mergeNcss } from '../lib/merge-ncss'
import { NcssNode } from '../lib/ncss'
import { Wheel } from '../lib/wheel'
import { videoDescriptionReset, videoVideoElementStyle } from './video-reset'

export interface VideoElementNcssTree extends NcssNode {
  description?: NcssNode
}

export interface VideoElementProps {
  wheel: Wheel
  description?: string
  includeDescription?: boolean
  includeTitle?: boolean
  media?: MediaGatsbyModel
  poster?: string
  title?: string
}

const defaultMediaGatsbyModel = {
  description: 'No media description available',
  file: {
    url: 'https://www.example.com',
    fileName: 'none',
    contentType: 'video/mp4',
  },
  title: 'No media title available',
} as MediaGatsbyModel

export const Video = (props: VideoElementProps) => {
  const media = props.media || defaultMediaGatsbyModel
  if (
    media?.file?.contentType === 'image/jpeg' ||
    media?.file?.contentType === 'image/webp' ||
    media?.file?.contentType === 'image/png'
  ) {
    return null
  }

  const videoAttrs = {
    poster: props.poster || '',
    title: media.title || props.title || defaultMediaGatsbyModel.title,
    url: (media.file && media.file.url) || defaultMediaGatsbyModel.file!.url,
    type:
      (media.file && media.file.contentType) ||
      defaultMediaGatsbyModel.file!.contentType,
    description:
      media.description || props.description || defaultMediaGatsbyModel.description,
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
            props.wheel.elementNcss.video,
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
              props.wheel.elementNcss.video.description,
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

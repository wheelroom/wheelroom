/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from '@emotion/core'
import {
  videoDescriptionReset,
  videoVideoElementStyle,
} from './resets/video-reset'
import { styledSystem } from '@wheelroom/styled-system'
import { NcssProps, Wheel } from '../types'
import { MediaObject } from './types/media'
import { mergeNcss } from '../../lib/merge-ncss'

export interface VideoElementStyle {
  video: {
    ncss: NcssProps
  }
  description: {
    ncss: NcssProps
  }
}

export interface VideoProps {
  /** Styling wheel */
  wheel: Wheel
  description?: string
  includeDescription?: boolean
  includeTitle?: boolean
  media?: MediaObject
  title?: string
}

const defaultMediaObject = {
  includeTitle: false,
  includeDescription: false,
  description: 'no description',
  file: {
    url: 'https://www.example.com',
    fileName: 'none',
    contentType: 'video/mp4',
  },
  title: 'no title available',
} as MediaObject

export const Video = (props: VideoProps) => {
  const media = props.media || defaultMediaObject
  // Video uses media.file, images use media.fluid
  if (!media.file) {
    return null
  }

  const videoAttrs = {
    title: media.title || props.title || defaultMediaObject.title,
    url: (media.file && media.file.url) || defaultMediaObject.file!.url,
    type:
      (media.file && media.file.contentType) ||
      defaultMediaObject.file!.contentType,
    description:
      media.description || props.description || defaultMediaObject.description,
  }

  const style = props.wheel.style || {}
  const video = style.video || {}
  const description = style.description || {}

  const videoLabel = { ncss: { label: 'video-video' } }
  const descritpionLabel = { ncss: { label: 'video-description' } }

  return (
    <Fragment>
      <video
        css={styledSystem(
          props.wheel.styledSystemConfig,
          props.wheel.theme,
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
            props.wheel.styledSystemConfig,
            props.wheel.theme,
            mergeNcss([
              descritpionLabel,
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
}

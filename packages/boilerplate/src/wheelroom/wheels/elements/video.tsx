/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from '@emotion/core'
import { MediaObject } from './types'
import { videoVideoPreset, videoDescriptionPreset } from './video-preset'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel, NcssProps } from '../types'

export interface VideoPreset {
  video?: {
    ncss?: NcssProps
  }
  description?: {
    ncss?: NcssProps
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

  return (
    <Fragment>
      <video
        css={styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
          ncss: {
            ...props.wheel.elementPresets.video.video,
            ...videoVideoPreset,
            ...video.ncss,
          },
        })}
        controls
        playsInline
      >
        <source src={videoAttrs.url} type={videoAttrs.type} />
        Your browser does not support the video tag.
      </video>
      {props.includeTitle && (
        <p
          css={styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
            ncss: {
              ...props.wheel.elementPresets.video.description,
              ...videoDescriptionPreset,
              ...description.ncss,
            },
          })}
        >
          <b>{videoAttrs.title}</b>
          {props.includeDescription && ` – ` + videoAttrs.description}
        </p>
      )}
    </Fragment>
  )
}

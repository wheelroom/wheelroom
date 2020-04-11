/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import { NcssProps, MediaObject } from './types'
import { videoPreset, videoDescriptionPreset } from './video-preset'
import { videoStyle, videoDescriptionStyle } from './video-theme'

export interface VideoTreeStyle {
  video?: {
    ncss?: NcssProps
  }
  description?: {
    ncss?: NcssProps
  }
}

export interface VideoProps {
  description?: string
  includeDescription?: boolean
  includeTitle?: boolean
  media?: MediaObject
  treeStyle?: VideoTreeStyle
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
  const currentThemeId = useGetCurrentThemeId() as ThemeId

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

  const treeStyle = props.treeStyle || {}
  const video = treeStyle.video || {}
  const description = treeStyle.description || {}

  return (
    <Fragment>
      <video
        css={systemCss(
          {
            ncss: {
              ...videoPreset,
              ...videoStyle,
              ...video.ncss,
            },
          },
          currentThemeId
        )}
        controls
        playsInline
      >
        <source src={videoAttrs.url} type={videoAttrs.type} />
        Your browser does not support the video tag.
      </video>
      {props.includeTitle && (
        <p
          css={systemCss(
            {
              ncss: {
                ...videoDescriptionPreset,
                ...videoDescriptionStyle,
                ...description.ncss,
              },
            },
            currentThemeId
          )}
        >
          <b>{videoAttrs.title}</b>
          {props.includeDescription && ` – ` + videoAttrs.description}
        </p>
      )}
    </Fragment>
  )
}

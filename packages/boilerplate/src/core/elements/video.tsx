/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import { NcssProps, MediaObject } from './types'
import { commonVideoStyle, commonVideoDescriptionStyle } from '../styles/video'

export interface VideoProps {
  description?: string
  descriptionNcss?: NcssProps
  includeDescription?: boolean
  includeTitle?: boolean
  media?: MediaObject
  title?: string
  videoNcss?: NcssProps
}

const defaultMediaObject = {
  description: 'no description',
  file: {
    url: 'https://www.example.com',
    fileName: 'none',
    contentType: 'video/mp4',
  },
  title: 'No alternate text available',
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

  const descriptionNcss = props.descriptionNcss || {}
  const videoNcss = props.videoNcss || {}

  return (
    <Fragment>
      <video
        css={systemCss(
          { ncss: { ...commonVideoStyle, ...videoNcss } },
          currentThemeId
        )}
        controls
      >
        <source src={videoAttrs.url} type={videoAttrs.type} />
        Your browser does not support the video tag.
      </video>
      {props.title && (
        <p
          css={systemCss(
            { ncss: { ...commonVideoDescriptionStyle, ...descriptionNcss } },
            currentThemeId
          )}
        >
          <b>{videoAttrs.title}</b>
          {props.title && videoAttrs.description && ` – `}
          {videoAttrs.description}
        </p>
      )}
    </Fragment>
  )
}

/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import { VideoAttributes, NcssProps } from './types'
import { commonVideoStyle, commonVideoFigcaptionStyle } from '../styles/video'

export interface VideoProps {
  description?: string
  figcaptionNcss?: NcssProps
  title?: string
  type?: string
  url?: string
  videoNcss?: NcssProps
}
export interface VideoProps {
    description?: string
    descriptionNcss?: NcssProps
    includeDescription?: boolean
    includeTitle?: boolean
    media?: MediaObject
    title?: string
    videoNcss?: NcssProps
  }


const defaultVideo = {
  description: 'No description available',
  url: 'https://www.example.com',
  title: 'No alternate text available',
  type: 'video/mp4',
} as VideoAttributes

export const Video = (props: VideoProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId

  const video = defaultVideo

  const videoAttrs = {
    title: props.title || video.title,
    url: props.url || video.url,
    type: props.type || video.type,
    description: props.description || video.description,
  }

  const videoFigcaptionNcss = props.figcaptionNcss || {}
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
      {(props.title || videoAttrs.description) && (
        <p
          css={systemCss(
            { ncss: { ...commonVideoFigcaptionStyle, ...videoFigcaptionNcss } },
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

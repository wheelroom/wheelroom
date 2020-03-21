/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import { VideoAttributes } from './types'
import { commonVideoStyle, commonVideoFigcaptionStyle } from '../styles/video'

export interface VideoProps {
  figcaptionNcss?: any
  url?: string
  videoNcss?: any
  type?: string
  title?: string
  description?: string
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
  }

  const videoFigcaptionNcss = props.figcaptionNcss || {}
  const videoNcss = props.videoNcss || {}

  return (
    <video controls>
      <source
        src={videoAttrs.url}
        type={videoAttrs.type}
        css={systemCss(
          { ncss: { ...commonVideoStyle, ...videoNcss } },
          currentThemeId
        )}
      />
      Your browser does not support the video tag.
      {/*{props.includeFigcaption && (*/}
      {/*  <figcaption*/}
      {/*    css={systemCss(*/}
      {/*      { ncss: { ...commonVideoFigcaptionStyle, ...videoFigcaptionNcss } },*/}
      {/*      currentThemeId*/}
      {/*    )}*/}
      {/*  >*/}
      {/*    {videoAttrs.alt}*/}
      {/*  </figcaption>*/}
      {/*)}*/}
    </video>
  )
}

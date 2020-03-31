/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import { NcssProps, MediaObject } from './types'
import { getStyles } from '../lib/style-tree'

export interface VideoStyleTree {
  video?: NcssProps
  description?: NcssProps
}

export interface VideoProps {
  description?: string
  includeDescription?: boolean
  includeTitle?: boolean
  media?: MediaObject
  styleTree?: VideoStyleTree
  title?: string
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
  const styles = ['video', 'desciption']
  const [videoStyle, desciptionStyle] = getStyles(props.styleTree, ...styles)
  console.log(videoStyle)

  return (
    <Fragment>
      <video css={systemCss({ ncss: videoStyle }, currentThemeId)} controls>
        <source src={videoAttrs.url} type={videoAttrs.type} />
        Your browser does not support the video tag.
      </video>
      {props.title && (
        <p css={systemCss({ ncss: desciptionStyle }, currentThemeId)}>
          <b>{videoAttrs.title}</b>
          {props.title && videoAttrs.description && ` – `}
          {videoAttrs.description}
        </p>
      )}
    </Fragment>
  )
}

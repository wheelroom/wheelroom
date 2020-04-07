/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import { NcssProps, MediaObject } from './types'
import { getStyles } from '../lib/tree-style'
import {
  defaultVideoStyle,
  defaultVideoDescriptionStyle,
} from '../../element-styles/video'

export interface VideoTreeStyle {
  video?: NcssProps
  description?: NcssProps
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

  const [videoStyle, descriptionStyle] = getStyles(
    props.treeStyle,
    'video',
    'description'
  )

  return (
    <Fragment>
      <video
        css={systemCss(
          { ncss: { ...defaultVideoStyle, ...videoStyle } },
          currentThemeId
        )}
        controls
        playsinline
      >
        <source src={videoAttrs.url} type={videoAttrs.type} />
        Your browser does not support the video tag.
      </video>
      {props.includeTitle && (
        <p
          css={systemCss(
            { ncss: { ...defaultVideoDescriptionStyle, ...descriptionStyle } },
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

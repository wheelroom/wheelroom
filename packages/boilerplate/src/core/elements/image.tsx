/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import { MediaObject, NcssProps } from './types'
import {
  commonImagePictureStyle,
  commonImageImgStyle,
  commonImageFigcaptionStyle,
} from '../styles/image'

export interface ImageProps {
  description?: string
  figcaptionNcss?: NcssProps
  media?: MediaObject
  imgNcss?: NcssProps
  includeFigcaption?: boolean
  pictureNcss?: NcssProps
  title?: string
}

const defaultMediaObject = {
  description: 'no description available',
  fluid: {
    sizes: '',
    src: '//placehold.it/1024',
    srcSet: '',
  },
  title: 'No title available',
} as MediaObject

export const Image = (props: ImageProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId

  const media = props.media || defaultMediaObject

  const imgElementAttrs = {
    alt:
      media.description || props.description || defaultMediaObject.description,
    title: media.title || props.title || defaultMediaObject.title,
    sizes: media.fluid.sizes,
    src: media.fluid.src,
    srcSet: media.fluid.srcSet,
  }

  const figcaptionNcss = props.figcaptionNcss || {}
  const imgNcss = props.imgNcss || {}
  const pictureNcss = props.pictureNcss || {}

  return (
    <picture
      css={systemCss(
        { ncss: { ...commonImagePictureStyle, ...pictureNcss } },
        currentThemeId
      )}
    >
      <img
        {...imgElementAttrs}
        css={systemCss(
          { ncss: { ...commonImageImgStyle, ...imgNcss } },
          currentThemeId
        )}
      />
      {props.includeFigcaption && (
        <figcaption
          css={systemCss(
            { ncss: { ...commonImageFigcaptionStyle, ...figcaptionNcss } },
            currentThemeId
          )}
        >
          {imgElementAttrs.alt}
        </figcaption>
      )}
    </picture>
  )
}

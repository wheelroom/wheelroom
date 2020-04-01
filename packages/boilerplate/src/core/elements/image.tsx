/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import { MediaObject, NcssProps } from './types'
import { getStyles } from '../lib/style-tree'
import {
  defaultImageImgStyle,
  defaultImagePictureStyle,
  defaultImageFigcaptionStyle,
} from '../../styles/core-elements/image'

export interface ImageStyleTree {
  img?: NcssProps
  picture?: NcssProps
  figcaption?: NcssProps
}

export interface ImageProps {
  description?: string
  media?: MediaObject
  includeFigcaption?: boolean
  styleTree?: ImageStyleTree
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
  // Video uses media.file, images use media.fluid
  if (!media.fluid) {
    return null
  }

  const imgElementAttrs = {
    alt:
      media.description || props.description || defaultMediaObject.description,
    title: media.title || props.title || defaultMediaObject.title,
    sizes: media.fluid && media.fluid.sizes,
    src: media.fluid && media.fluid.src,
    srcSet: media.fluid && media.fluid.srcSet,
  }

  const [figcaptionStyle, imgStyle, pictureStyle] = getStyles(
    props.styleTree,
    'figcaption',
    'img',
    'picture'
  )

  return (
    <picture
      css={systemCss(
        { ncss: { ...defaultImagePictureStyle, ...pictureStyle } },
        currentThemeId
      )}
    >
      <img
        {...imgElementAttrs}
        css={systemCss(
          { ncss: { ...defaultImageImgStyle, ...imgStyle } },
          currentThemeId
        )}
      />
      {props.includeFigcaption && (
        <figcaption
          css={systemCss(
            { ncss: { ...defaultImageFigcaptionStyle, ...figcaptionStyle } },
            currentThemeId
          )}
        >
          {imgElementAttrs.alt}
        </figcaption>
      )}
    </picture>
  )
}

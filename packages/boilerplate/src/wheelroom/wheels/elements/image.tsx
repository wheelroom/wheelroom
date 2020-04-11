/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import { MediaObject, NcssProps } from './types'
import {
  imageFigcaptionPreset,
  imageImgPreset,
  imagePicturePreset,
} from './image-preset'
import {
  imageImgStyle,
  imagePictureStyle,
  imageFigcaptionStyle,
} from './image-theme'

export interface ImageTreeStyle {
  picture?: {
    ncss?: NcssProps
  }
  img?: {
    ncss?: NcssProps
  }
  figcaption?: {
    ncss?: NcssProps
  }
}

export interface ImageProps {
  description?: string
  media?: MediaObject
  includeFigcaption?: boolean
  treeStyle?: ImageTreeStyle
  title?: string
}

const defaultMediaObject = {
  description: 'no alt available',
  fluid: {
    sizes: '',
    src: '//placehold.it/320',
    srcSet: '',
  },
  title: 'no title available',
} as MediaObject

export const Image = (props: ImageProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId

  const media = props.media || defaultMediaObject
  /** Video uses media.file, images use media.fluid */
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

  const treeStyle = props.treeStyle || {}
  const picture = treeStyle.picture || {}
  const img = treeStyle.img || {}
  const figcaption = treeStyle.figcaption || {}

  return (
    <picture
      css={systemCss(
        {
          ncss: {
            ...imagePicturePreset,
            ...imagePictureStyle,
            ...picture.ncss,
          },
        },
        currentThemeId
      )}
    >
      <img
        {...imgElementAttrs}
        css={systemCss(
          {
            ncss: {
              ...imageImgPreset,
              ...imageImgStyle,
              ...img.ncss,
            },
          },
          currentThemeId
        )}
      />
      {props.includeFigcaption && imgElementAttrs.alt && (
        <figcaption
          css={systemCss(
            {
              ncss: {
                ...imageFigcaptionPreset,
                ...imageFigcaptionStyle,
                ...figcaption.ncss,
              },
            },
            currentThemeId
          )}
        >
          {imgElementAttrs.alt}
        </figcaption>
      )}
    </picture>
  )
}

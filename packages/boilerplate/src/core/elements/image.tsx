/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import { FluidImageObject, NcssProps } from './types'
import {
  commonImagePictureStyle,
  commonImageImgStyle,
  commonImageFigcaptionStyle,
} from '../styles/image'

export interface ImageProps {
  alt?: string
  figcaptionNcss?: NcssProps
  fluidImageObject?: FluidImageObject
  imgNcss?: NcssProps
  includeFigcaption?: boolean
  pictureNcss?: NcssProps
  title?: string
}

const defaultFluidImageObject = {
  description: 'no description',
  fluid: {
    sizes: '',
    src: '//placehold.it/1024',
    srcSet: '',
  },
  title: 'No alternate text available',
} as FluidImageObject

export const Image = (props: ImageProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId

  const fluidImageObject = props.fluidImageObject || defaultFluidImageObject

  const imgElementAttrs = {
    alt:
      fluidImageObject.description ||
      props.alt ||
      'No alternate text available',
    title: fluidImageObject.title || props.title || 'No title',
    sizes: fluidImageObject.fluid.sizes,
    src: fluidImageObject.fluid.src,
    srcSet: fluidImageObject.fluid.srcSet,
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

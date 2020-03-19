/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import { FluidImage } from './types'
import {
  commonImagePictureStyle,
  commonImageImgStyle,
  commonImageFigcaptionStyle,
} from '../styles/image'

export interface ImageProps {
  alt: string
  figcaptionNcss: any
  image?: FluidImage
  imgNcss: any
  includeFigcaption: boolean
  pictureNcss: any
  title: string
}

const defaultFluidImage = {
  description: 'no description',
  fluid: {
    sizes: '',
    src: '//placehold.it/1024',
    srcSet: '',
  },
  title: 'No alternate text available',
} as FluidImage

export const Image = (props: ImageProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId

  const fluidImage = props.image || defaultFluidImage

  const imgAttrs = {
    alt: fluidImage.description || props.alt || 'No alternate text available',
    title: fluidImage.title || props.title || 'No title',
    sizes: fluidImage.fluid.sizes,
    src: fluidImage.fluid.src,
    srcSet: fluidImage.fluid.srcSet,
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
        {...imgAttrs}
        css={systemCss({ ncss: { ...commonImageImgStyle, ...imgNcss } })}
      />
      {props.includeFigcaption && (
        <figcaption
          css={systemCss(
            { ncss: { ...commonImageFigcaptionStyle, ...figcaptionNcss } },
            currentThemeId
          )}
        >
          {imgAttrs.alt}
        </figcaption>
      )}
    </picture>
  )
}

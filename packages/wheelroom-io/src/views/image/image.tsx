/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'

export interface FluidImage {
  description: string
  fluid: {
    sizes: string
    src: string
    srcSet: string
  }
  title: string
}

type styleProp = string | string[] | number | number[]

export interface ImageProps {
  '&:hover'?: any
  description?: string
  title?: string
  border?: string
  borderRadius?: string | string[]
  clipPath?: string
  height?: styleProp
  width?: any
  /** fluid image object, see defaultProps */
  image?: FluidImage
  maxHeight?: styleProp
  minHeight?: styleProp
  my?: styleProp
  /** optional overlay */
  overlay?: 'solid' | 'gradient'
  /** like the css property */
  objectFit?: string
  /** like the css property */
  transition?: string
  caption?: boolean
}

const overlayStyles = {
  gradient: {
    '&::after': {
      background:
        'linear-gradient( 0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 80% )',
      bottom: '0',
      content: '""',
      display: 'block',
      left: '0',
      position: 'absolute',
      right: '0',
      top: '0',
    },
    position: 'relative',
  },
  solid: {
    '&::after': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      bottom: '0',
      content: '""',
      display: 'block',
      left: '0',
      position: 'absolute',
      right: '0',
      top: '0',
    },
    position: 'relative',
  },
}

export const Image = (props: ImageProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const overlayStyleProps = props.overlay ? overlayStyles[props.overlay] : {}

  const pictureStyles = {
    '&:hover': props['&:hover'],
    border: props.border,
    display: 'block',
    height: props.height,
    maxHeight: props.maxHeight,
    minHeight: props.minHeight,
    my: props.my,
    transition: props.transition,
    width: props.width,
    ...overlayStyleProps,
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

  const fluidImage = props.image || defaultFluidImage

  const imgStyles = {
    borderRadius: props.borderRadius,
    clipPath: props.clipPath,
    display: 'block',
    height: 'auto',
    objectFit: props.objectFit,
    width: '100%',
  }

  const imgAttrs = {
    alt: fluidImage.title || 'No alternate text available',
    title: fluidImage.title || null,
    sizes: fluidImage.fluid.sizes,
    src: fluidImage.fluid.src,
    srcSet: fluidImage.fluid.srcSet,
  }

  const imgCaptionStyles = {
    fontFamily: 'text',
    color: 'text',
    fontSize: [1, 2],
    fontWeight: 2,
    my: 2,
  }

  const imgCaption = {
    show: props.caption,
  }

  const ImageCaption = (imgCaption: any) => {
    if (imgCaption.show && fluidImage.description)
      return (
        <figcaption css={systemCss({ ncss: imgCaptionStyles }, currentThemeId)}>
          {fluidImage.description}
        </figcaption>
      )
    else return null
  }

  return (
    <picture css={systemCss({ ncss: pictureStyles }, currentThemeId)}>
      <img {...imgAttrs} css={systemCss({ ncss: imgStyles })} />
      <ImageCaption {...imgCaption} />
    </picture>
  )
}

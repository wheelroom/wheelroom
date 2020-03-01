/** @jsx jsx */
import { jsx } from '@emotion/core'

import { systemCss } from '../../styled-system/system-css'

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
  alt?: string
  border?: string
  borderRadius?: string | string[]
  clipPath?: string
  height?: styleProp
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
  const overlayStyleProps = props.overlay ? overlayStyles[props.overlay] : {}

  const pictureStyles = {
    '&:hover': props['&:hover'],
    border: props.border || 'initial',
    display: 'block',
    height: props.height,
    maxHeight: props.maxHeight,
    minHeight: props.minHeight,
    my: props.my,
    transition: props.transition,
    width: '100%',
    ...overlayStyleProps,
  }

  const defaultFluidImage = {
    description: 'no description',
    fluid: {
      sizes: '',
      src: '//placehold.it/512',
      srcSet: '',
    },
    title: 'no title',
  } as FluidImage

  const fluidImage = props.image || defaultFluidImage

  const imgStyles = {
    borderRadius: props.borderRadius || 'initial',
    clipPath: props.clipPath,
    display: 'block',
    height: '100%',
    objectFit: props.objectFit || 'cover',
    width: '100%',
  }

  const imgAttrs = {
    alt: fluidImage.description || fluidImage.title || 'no description',
    sizes: fluidImage.fluid.sizes,
    src: fluidImage.fluid.src || '//placehold.it/512',
    srcSet: fluidImage.fluid.srcSet,
    width: '100%',
  }

  return (
    <picture css={systemCss({ ncss: pictureStyles })}>
      <img {...imgAttrs} css={systemCss({ ncss: imgStyles })} />
    </picture>
  )
}

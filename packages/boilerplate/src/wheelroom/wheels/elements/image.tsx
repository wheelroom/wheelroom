/** @jsx jsx */
import { jsx } from '@emotion/core'
import { MediaObject } from './types'
import {
  imageFigcaptionPreset,
  imageImgPreset,
  imagePicturePreset,
} from './image-preset'
import { NcssProps, Wheel } from '../types'
import { styledSystem } from '@wheelroom/styled-system'

export interface ImagePreset {
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
  /** Styling wheel */
  wheel: Wheel
  description?: string
  media?: MediaObject
  includeFigcaption?: boolean
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

  const style = props.wheel.style || {}
  const picture = style.picture || {}
  const img = style.img || {}
  const figcaption = style.figcaption || {}

  return (
    <picture
      css={styledSystem(
        props.wheel.styledSystemConfig,
        props.wheel.theme,
        {
          ncss: {
            ...props.wheel.elementPresets.image.picture,
            ...imagePicturePreset,
            ...picture.ncss,
          },
        }
      )}
    >
      <img
        {...imgElementAttrs}
        css={styledSystem(
          props.wheel.styledSystemConfig,
          props.wheel.theme,
          {
            ncss: {
              ...props.wheel.elementPresets.image.img,
              ...imageImgPreset,
              ...img.ncss,
            },
          }
        )}
      />
      {props.includeFigcaption && imgElementAttrs.alt && (
        <figcaption
          css={styledSystem(
            props.wheel.styledSystemConfig,
            props.wheel.theme,
            {
              ncss: {
                ...props.wheel.elementPresets.image.figcaption,
                ...imageFigcaptionPreset,
                ...figcaption.ncss,
              },
            }
          )}
        >
          {imgElementAttrs.alt}
        </figcaption>
      )}
    </picture>
  )
}

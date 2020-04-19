/** @jsx jsx */
import { jsx } from '@emotion/core'
import {
  imageFigcaptionReset,
  imageImgReset,
  imagePictureReset,
} from './resets/image-reset'
import { NcssProps, Wheel } from '../types'
import { styledSystem } from '@wheelroom/styled-system'
import { MediaObject } from './types/media'
import { mergeNcss } from '../../lib/merge-ncss'

export interface ImageElementStyle {
  picture: {
    ncss: NcssProps
  }
  img: {
    ncss: NcssProps
  }
  figcaption: {
    ncss: NcssProps
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
  const imgLabel = { ncss: { label: 'image-img' } }
  const pictureLabel = { ncss: { label: 'image-picture' } }
  const figcaptionLabel = { ncss: { label: 'image-figcaption' } }

  return (
    <picture
      css={styledSystem(
        props.wheel.styledSystemConfig,
        props.wheel.theme,
        mergeNcss([
          pictureLabel,
          imagePictureReset,
          props.wheel.elementStyles.image.picture,
          props.wheel.style.picture,
        ])
      )}
    >
      <img
        {...imgElementAttrs}
        css={styledSystem(
          props.wheel.styledSystemConfig,
          props.wheel.theme,
          mergeNcss([
            imgLabel,
            imageImgReset,
            props.wheel.elementStyles.image.img,
            props.wheel.style.img,
          ])
        )}
      />
      {props.includeFigcaption && imgElementAttrs.alt && (
        <figcaption
          css={styledSystem(
            props.wheel.styledSystemConfig,
            props.wheel.theme,
            mergeNcss([
              figcaptionLabel,
              imageFigcaptionReset,
              props.wheel.elementStyles.image.figcaption,
              props.wheel.style.figcaption,
            ])
          )}
        >
          {imgElementAttrs.alt}
        </figcaption>
      )}
    </picture>
  )
}

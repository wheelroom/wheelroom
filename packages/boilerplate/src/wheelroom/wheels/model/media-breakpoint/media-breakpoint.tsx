/** @jsx jsx */
import { jsx } from '@emotion/core'
import { NcssProps, Wheel } from '../../../types/wheel'
import { MediaObject } from '../../../elements/types/media'
import { styledSystem, StyledSystemTheme } from '@wheelroom/styled-system'
import { mergeNcss } from '../../../lib/merge-ncss'
import {
  imageImgReset,
  imagePictureReset,
} from '../../../elements/resets/image-reset'

export interface MediaBreakpointStyle {
  img: {
    ncss: NcssProps
  }
  picture: {
    ncss: NcssProps
  }
}

export interface MediaBreakpointWheelProps {
  /** Styling wheel */
  wheel: Wheel
  /** MediaObject props */
  small?: MediaObject
  medium?: MediaObject
  large?: MediaObject
  extraLarge?: MediaObject
}

export const MediaBreakpoint = (media: MediaBreakpointWheelProps) => {
  if (!media.small) {
    return null
  }

  /** Not familiar with Responsive images, read the following article:
   * https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images */

  /** Shink default image to 1024px */
  let minWidth = media.small.file?.details.image.width || 1
  if (minWidth >= 1024) minWidth = 1024

  /** Set default image attributes */
  const imgAttr = {
    src: media.small.file?.url + '?w=' + minWidth + '&q=75' || '',
    alt: media.small.description || 'No image description available',
    title: media.small.title || 'No image title available',
  }

  /** Check and get all Theme breakpoints*/
  const smallWidth = media.wheel.theme.breakpoints[0]
  const mediumWidth = media.wheel.theme.breakpoints[1]
  const largeWidth = media.wheel.theme.breakpoints[2]
  const extraLargeWidth = media.wheel.theme.breakpoints[3]

  const pictureLabel = { ncss: { label: 'picture' } }
  const imgLabel = { ncss: { label: 'img' } }

  return (
    <picture
      css={styledSystem(
        media.wheel.styledSystemConfig,
        (media.wheel.theme as unknown) as StyledSystemTheme,
        mergeNcss([
          pictureLabel,
          imagePictureReset,
          media.wheel.elementStyles.mediaBreakpoint.picture,
          media.wheel.style.picture,
        ])
      )}
    >
      {extraLargeWidth && media.extraLarge && (
        <source
          media={'(min-width:' + extraLargeWidth + ')'}
          srcSet={media.extraLarge.file?.url + '?q=75'}
        />
      )}
      {largeWidth && media.large && (
        <source
          media={'(min-width:' + largeWidth + ')'}
          srcSet={media.large.file?.url + '?q=75'}
        />
      )}
      {mediumWidth && media.medium && (
        <source
          media={'(min-width:' + mediumWidth + ')'}
          srcSet={media.medium.file?.url + '?q=75'}
        />
      )}
      {smallWidth && media.small && (
        <source
          media={'(min-width:' + smallWidth + ')'}
          srcSet={media.small.file?.url + '?q=75'}
        />
      )}
      <img
        css={styledSystem(
          media.wheel.styledSystemConfig,
          (media.wheel.theme as unknown) as StyledSystemTheme,
          mergeNcss([
            imgLabel,
            imageImgReset,
            media.wheel.elementStyles.mediaBreakpoint.img,
            media.wheel.style.img,
          ])
        )}
        {...imgAttr}
      />
    </picture>
  )
}

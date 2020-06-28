/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel } from '../../lib/wheel'
import { MediaObject } from '../../elements/types/media'
import { mergeNcss } from '../../lib/merge-ncss'
import {
  imageImgReset,
  imagePictureReset,
} from '../../elements/element/image-reset'
import { MediaBreakpointNcssTree } from './ncss-tree'

interface MediaBreakpointWheelStyle extends Wheel {
  style: MediaBreakpointNcssTree
}

export interface MediaBreakpointWheelProps {
  /** Styling wheel */
  wheel: MediaBreakpointWheelStyle
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
  const smallWidth = media.wheel.wrSystemTheme.breakpoints[0]
  const mediumWidth = media.wheel.wrSystemTheme.breakpoints[1]
  const largeWidth = media.wheel.wrSystemTheme.breakpoints[2]
  const extraLargeWidth = media.wheel.wrSystemTheme.breakpoints[3]

  const pictureLabel = { ncss: { label: 'picture' } }
  const imgLabel = { ncss: { label: 'img' } }

  return (
    <picture
      css={styledSystem(
        media.wheel.wrSystemConfig,
        media.wheel.wrSystemTheme,
        mergeNcss([
          pictureLabel,
          imagePictureReset,
          media.wheel.elementNcss.mediaBreakpoint.picture,
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
          media.wheel.wrSystemConfig,
          media.wheel.wrSystemTheme,
          mergeNcss([
            imgLabel,
            imageImgReset,
            media.wheel.elementNcss.mediaBreakpoint,
            media.wheel.style,
          ])
        )}
        {...imgAttr}
      />
    </picture>
  )
}

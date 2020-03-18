/**
 * Component variation
 *
 * Component type: topic
 * Variation: Single
 *
 */

import React from 'react'
import { Image, ImageProps } from '../../core/elements/image'
import { Any } from '../../core/elements/any'

const defaultWrapperStyle = {
  label: 'TopicImageWrapper',
}

const defaultImageProps = {
  objectFit: 'cover',
}

export interface TopicImageProps {
  /** The image to show */
  imageProps: ImageProps
  /** Override default styling of the wrapper */
  imageWrapperStyle?: any
}

export const TopicImage = (props: TopicImageProps) => {
  const imageWrapperStyle = props.imageWrapperStyle || {}
  return (
    <Any is="div" ncss={{ ...defaultWrapperStyle, ...imageWrapperStyle }}>
      <Image {...defaultImageProps} {...props.imageProps} />
    </Any>
  )
}

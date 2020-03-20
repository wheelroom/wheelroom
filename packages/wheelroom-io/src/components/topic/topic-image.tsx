import React from 'react'
import { Image, ImageProps } from '../../core/elements/image'
import { Box } from '../../core/elements/grid'

const defaultWrapperStyle = {
  label: 'topic-image',
  justifyContent: 'center',
}

const overrideImageWrapperStyle = {
  label: 'override',
  justifyContent: 'normal',
}

const defaultImageProps = {}

export interface TopicImageProps {
  /** The image to show */
  imageProps: ImageProps
  /** Override default styling of the wrapper */
  imageWrapperStyle?: any
  /** The css order property applied to the container */
  order: number
  /** Topic has rich text */
  hasText: boolean
}

export const TopicImage = (props: TopicImageProps) => {
  const imageWrapperStyle = props.imageWrapperStyle || {}
  return (
    <Box
      ncss={{
        order: props.order,
        ...defaultWrapperStyle,
        ...imageWrapperStyle,
        ...(props.hasText ? { ...overrideImageWrapperStyle } : imageWrapperStyle),
      }}
    >
      <Image {...defaultImageProps} {...props.imageProps} />
    </Box>
  )
}

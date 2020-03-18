import React from 'react'
import { Image, ImageProps } from '../../core/elements/image'
import { Box } from '../../core/elements/grid'

const defaultWrapperStyle = {
  label: 'TopicImage',
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
    <Box ncss={{ ...defaultWrapperStyle, ...imageWrapperStyle }}>
      <Image {...defaultImageProps} {...props.imageProps} />
    </Box>
  )
}

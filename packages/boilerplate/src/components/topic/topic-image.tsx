import React from 'react'
import { Image, ImageProps } from '../../core/elements/image'
import { Box } from '../../core/elements/grid'
import { NcssProps } from '../../core/elements/types'
import { TopicProps } from '.'
import { TopicInfo } from '../../lib/get-topic-info'
import { PageSectionInfo } from '../../lib/get-page-section-info'

const defaultWrapperStyle = {
  label: 'topic-image',
  justifyContent: 'center',
}

const overrideImageWrapperStyle = {
  label: 'topic-image-override',
  justifyContent: 'normal',
}

const defaultImageProps = {}

export interface TopicImageProps {
  /** The image to show */
  imageProps: ImageProps
  /** Override default styling of the wrapper */
  imageWrapperStyle?: NcssProps

  /** All topic props */
  topic: TopicProps
  /** Topic info object */
  topicInfo: TopicInfo
  /** Page section info */
  pageSectionInfo: PageSectionInfo
  /** Reverse image and content */
  reverse?: boolean
}

export const TopicImage = (props: TopicImageProps) => {
  const order = props.reverse ? -1 : -2

  const imageWrapperStyle = props.imageWrapperStyle || {}
  return (
    <Box
      ncss={{
        order,
        ...defaultWrapperStyle,
        ...imageWrapperStyle,
        ...(props.pageSectionInfo.hasText
          ? { ...overrideImageWrapperStyle }
          : imageWrapperStyle),
      }}
    >
      <Image {...defaultImageProps} {...props.imageProps} />
    </Box>
  )
}

import React from 'react'
import { Box } from '../../core/elements/grid'
import { TopicOptions } from '../page-section/get-topic-options'

/** This style needs cleaning up, only default values here */
const defaultWrapperStyle = {
  label: 'TopicContent',
}

export interface TopicContentWrapperProps {
  children: any
  /** Override default wrapper styling */
  contentWrapperStyle?: any
  /** The css order property applied to the container */
  order: number
  /** Topic options */
  options: TopicOptions
}

export const TopicContentWrapper = (props: TopicContentWrapperProps) => {
  const contentWrapperStyle = props.contentWrapperStyle || {}
  return (
    <Box
      ncss={{
        order: props.order,
        ...defaultWrapperStyle,
        // TODO: Thijs, implement this
        ...(props.options.hideImage
          ? { otherStyles: 'here' }
          : contentWrapperStyle),
      }}
    >
      {props.children}
    </Box>
  )
}

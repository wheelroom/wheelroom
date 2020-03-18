import React from 'react'
import { Box } from '../../core/elements/grid'

/** This style needs cleaning up, onyl default values here */
const defaultWrapperStyle = {
  label: 'TopicContent',
}

export interface TopicContentWrapperProps {
  children: any
  /** Override default wrapper styling */
  contentWrapperStyle?: any
  /** The css order property applied to the container */
  order: number
}

export const TopicContentWrapper = (props: TopicContentWrapperProps) => {
  const contentWrapperStyle = props.contentWrapperStyle || {}
  return (
    <Box
      ncss={{
        order: props.order,
        ...defaultWrapperStyle,
        ...contentWrapperStyle,
      }}
    >
      {props.children}
    </Box>
  )
}
